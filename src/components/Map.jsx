import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useCardData } from "../utils/userStore";

const Map = () => {
  const { cards, selectedMarker, selectedCard } = useCardData();


  return (
    <MapContainer
      center={[32.648487094050125, 51.67227251599078]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "90vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {selectedCard
        ? selectedMarker?.map((e) => (
            <Marker key={e.id} position={[e.lang, e.long]}>
              <Popup>{e.name}</Popup>
            </Marker>
          ))
        : cards?.map((e) => (
            <Marker key={e.id} position={[e.lang, e.long]}>
              <Popup>{e.name}</Popup>
            </Marker>
          ))}
    </MapContainer>
  );
};
export default Map;
