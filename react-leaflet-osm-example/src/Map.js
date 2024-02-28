import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const FlyToPlace = ({ places, zoom }) => {
    const map = useMap();
    // Run the effect only when places array changes
    useEffect(() => {
        if (places.length === 0) return;
        map.flyTo([places[0].lat, places[0].lon], zoom);
    }, [places, zoom, map]);
    return null;
}

const Map = ({ places, zoom }) => {
    if (!places) return null;


    return (
        <div className="leafletContainer">
            <MapContainer
                style={{ width: '60vw', height: '60vh' }}
                center={[places[0].lat, places[0].lon]}
                zoom={zoom}
                scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FlyToPlace places={places} zoom={zoom} />
                {places.map((place) => (
                    <Marker key={place.id} position={[place.lat, place.lon]}>
                        <Popup>{place.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
export default Map;