import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { devices } from "./../utils/deviceData";

const Map = () => {
  return (
    <MapContainer
      center={[32.648487094050125, 51.67227251599078]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {devices.map((e) => (
        <Marker key={e.id} position={[e.lang , e.long]}>
          <Popup>{e.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
export default Map;
