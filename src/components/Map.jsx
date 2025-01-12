import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useCardData } from "../utils/userStore";

const Map = () => {
  const { cards, selectedMarker, selectedCard,setSelectedMarker , setSelectedCard} = useCardData();
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setSelectedMarker([card]);
  };
  return (
    <MapContainer
      center={[32.648487094050125, 51.67227251599078]}
      zoom={1}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {selectedCard
        ? selectedMarker?.map((e) => (
            <Marker
              key={e.id}
              position={[e.long, e.lat]}
              
            >
              <Tooltip>{e.company}</Tooltip>
            </Marker>
          ))
        : cards?.map((e) => (
            <Marker key={e.id} position={[e.long, e.lat]} eventHandlers={{ click: () => handleCardClick(e) }}>
              <Tooltip>{e.company}</Tooltip>
            </Marker>
          ))}
    </MapContainer>
  );
};
export default Map;
