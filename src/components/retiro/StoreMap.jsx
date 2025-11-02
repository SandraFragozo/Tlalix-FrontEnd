import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapWrapper = styled.div`
  height: 350px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--color-celeste);
  margin-bottom: 3rem;

  /* Estilos para que el mapa se vea bien */
  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`;

// Demo: Coordenadas de tiendas en CDMX (cerca del Ángel)
const locations = [
  { id: 1, name: "OXXO Reforma", pos: [19.4269, -99.1691] },
  { id: 2, name: "7-Eleven Florencia", pos: [19.4275, -99.1678] },
  { id: 3, name: "Farmacia Guadalajara", pos: [19.4255, -99.1705] }
];
// Centro del mapa
const center = [19.4270, -99.1688];

function StoreMap() {
  return (
    <MapWrapper>
      <MapContainer center={center} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map(loc => (
          <Marker position={loc.pos} key={loc.id}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </MapWrapper>
  );
}

export default StoreMap;