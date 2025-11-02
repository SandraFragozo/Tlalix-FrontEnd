import React from 'react';
import styled from 'styled-components';
import { QrCode } from 'lucide-react'; // Usamos el icono que ya tenemos

// --- Styled Components ---

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
`;

const QRBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  
  /* Un degradado con nuestros colores vibrantes */
  background: linear-gradient(145deg, var(--color-rosa-mexicano) 0%, var(--color-celeste) 100%);
`;

const QRIconWrapper = styled.div`
  background-color: var(--color-blanco);
  padding: 1.5rem;
  border-radius: 8px;
  display: inline-flex;
  margin-bottom: 2rem;
  
  /* El icono de QR (negro sobre blanco) */
  svg {
    color: var(--color-negro);
    width: 120px;
    height: 120px;
  }
`;

const QRLabel = styled.p`
  font-family: var(--fuente-texto); /* Caudex */
  font-size: 1rem;
  color: var(--color-blanco);
  opacity: 0.9;
  margin: 0;
`;

const QRValue = styled.p`
  font-family: var(--fuente-subtitulos); /* Forum */
  font-size: 1.75rem;
  color: var(--color-blanco);
  font-weight: 700;
  margin: 0.25rem 0;
  
  /* Estilo para el código */
  span {
    font-family: 'Courier New', Courier, monospace;
    background-color: rgba(0,0,0,0.2);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
  }
`;

const QRExpiry = styled.p`
  font-family: var(--fuente-texto);
  font-size: 0.9rem;
  color: var(--color-blanco);
  opacity: 0.8;
  margin-top: 1rem;
`;

// --- El Componente ---

function HowItWorksQR() {
  return (
    <SectionContainer>
      <QRBox>
        <QRIconWrapper>
          <QrCode />
        </QRIconWrapper>
        <QRLabel>Código:</QRLabel>
        <QRValue><span>123456</span></QRValue>
        <QRLabel>Monto:</QRLabel>
        <QRValue>$1,732.50 MXN</QRValue>
        
        <QRExpiry>Válido por 24 horas</QRExpiry>
      </QRBox>
    </SectionContainer>
  );
}

export default HowItWorksQR;