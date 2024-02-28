import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = ({ center, zoom, places }) => {
    return (
        <div className="leafletContainer">
            <MapContainer
                style={{ width: '60vw', height: '60vh' }}
                center={center} zoom={zoom}
                scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {places.map((place) => (
                    <Marker key={place.id} position={[place.lat, place.long]}>
                        <Popup>{place.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
export default Map;