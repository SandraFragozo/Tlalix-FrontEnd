import React, { useState } from 'react';
import styled from 'styled-components';
import StoreMap from '@/components/retiro/StoreMap';
import StoreGrid from '@/components/retiro/StoreGrid';
import PinQrModal from '@/components/retiro/PinQrModal';
import Footer from '@/components/Footer';

const RetiroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem; /* Padding lateral */
  margin-top: 2rem; /* Espacio superior */
  width: 100%;
`;

const Title = styled.h1`
  font-family: var(--fuente-titulos); /* Cinzel */
  color: var(--color-blanco);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const MapDemoTitle = styled.h2`
  font-family: var(--fuente-subtitulos);
  color: var(--color-blanco);
  font-weight: 400;
  opacity: 0.8;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

function PuntosDeRetiro() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");
  const [currentPin, setCurrentPin] = useState("");

  const handleOpenModal = (storeName) => {
    // Genera un PIN aleatorio de 6 dígitos (hardcodeado)
    const pin = Math.floor(100000 + Math.random() * 900000).toString();
    setSelectedStore(storeName);
    setCurrentPin(pin);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <RetiroContainer>
        <Title>Puntos de retiro</Title>
        <MapDemoTitle>Mapa interactivo (demo)</MapDemoTitle>
        
        <StoreMap />
        
        <StoreGrid onGenerarPin={handleOpenModal} />

      </RetiroContainer>
      
      <Footer />

      {isModalOpen && (
        <PinQrModal 
          storeName={selectedStore}
          pin={currentPin}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default PuntosDeRetiro;