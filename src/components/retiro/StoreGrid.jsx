import React from 'react';
import styled from 'styled-components';
import { MapPin, Clock, DollarSign } from 'lucide-react';

// --- Datos Hardcodeados ---
const stores = [
  { id: 1, name: "Tienda Aurrera Centro", city: "CDMX", address: "Av. Juárez 112", hours: "8:00 - 22:00", fee: "0.5%" },
  { id: 2, name: "OXXO Reforma", city: "CDMX", address: "Paseo de la Reforma 250", hours: "24 horas", fee: "0.5%" },
  { id: 3, name: "Farmacia Guadalajara", city: "Veracruz", address: "Blvd. Adolfo Ruiz Cortines 3450", hours: "7:00 - 23:00", fee: "0.5%" },
  { id: 4, name: "7-Eleven Garza Sada", city: "Monterrey", address: "Av. Garza Sada 2411", hours: "24 horas", fee: "0.5%" },
  { id: 5, name: "Soriana Express", city: "Monterrey", address: "Av. Constitución 1050", hours: "8:00 - 21:00", fee: "0.5%" }
];

// --- Styled Components ---
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const Card = styled.div`
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StoreTitle = styled.h3`
  font-family: var(--fuente-titulos);
  color: var(--color-blanco);
  font-size: 1.5rem;
  margin: 0 0 0.25rem 0;
`;

const StoreCity = styled.span`
  font-family: var(--fuente-texto);
  color: var(--color-blanco);
  opacity: 0.7;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--fuente-texto);
  color: var(--color-blanco);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  svg { width: 14px; height: 14px; opacity: 0.7; }
`;

const GeneratePinButton = styled.button`
  font-family: var(--fuente-subtitulos);
  font-size: 1.1rem;
  font-weight: 700;
  background-color: var(--color-verde-opaco);
  color: var(--color-blanco);
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  margin-top: 1.5rem;

  &:hover { transform: scale(1.02); }
`;

function StoreGrid({ onGenerarPin }) {
  return (
    <Grid>
      {stores.map(store => (
        <Card key={store.id}>
          <div>
            <StoreTitle>{store.name}</StoreTitle>
            <StoreCity>{store.city}</StoreCity>
            <InfoRow><MapPin /> {store.address}</InfoRow>
            <InfoRow><Clock /> {store.hours}</InfoRow>
            <InfoRow><DollarSign /> Comisión: {store.fee}</InfoRow>
          </div>
          <GeneratePinButton onClick={() => onGenerarPin(store.name)}>
            Generar PIN
          </GeneratePinButton>
        </Card>
      ))}
    </Grid>
  );
}

export default StoreGrid;