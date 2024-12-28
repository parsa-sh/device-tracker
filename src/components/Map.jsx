import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
      center={[35.69995926347466, 51.33802564549442]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.69995926347466, 51.33802564549442]}>
        <Popup>This is Azadi Square</Popup>
      </Marker>
      <Marker position={[45.69995926347466, 51.33802564549442]}>
        <Popup>This is Azadi Square</Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
