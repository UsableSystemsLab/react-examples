import { useState } from 'react';
import Map from './Map';
import Search from './Search';
import './App.css';

const initPlace = [{
  id: 100000,
  lat: 21.48939809560851,
  long: 39.24599580175876,
  name: "FCIT - King Abdulaziz University",
  display_name: "FCIT - King Abdulaziz University, Jeddah, Makkah, 21589, Saudi Arabia",
  class: "amenity",
  type: "university",
}];

const center = [21.48939809560851, 39.24599580175876];


const App = () => {
  const [places, setPlaces] = useState(initPlace);

  const handleSearch = async (query) => {
    // send a request to the nominatim API
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
    const data = await response.json();
    console.log(data);
    // map the response to select properties
    const filteredData = data.map((place) => ({
      id: place.place_id,
      lat: place.lat,
      long: place.lon,
      name: place.display_name,
      class: place.class,
      type: place.type,
    }));
    setPlaces(filteredData);
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      <Map center={center} zoom={13}
        places={places} />
    </div>
  );
}

export default App;