import React from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';

// --- Styled Components ---

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  padding: 2.5rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: var(--color-blanco);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover { opacity: 1; }
`;

const Title = styled.h2`
  font-family: var(--fuente-titulos); /* Cinzel */
  color: var(--color-blanco);
  font-size: 1.75rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-family: var(--fuente-texto); /* Caudex */
  color: var(--color-blanco);
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed var(--color-celeste);
  opacity: 0.7;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.span`
  font-family: var(--fuente-texto);
  color: var(--color-blanco);
  font-size: 1rem;
`;

const DetailValue = styled.span`
  font-family: var(--fuente-subtitulos); /* Forum */
  color: var(--color-blanco);
  font-size: 1.25rem;
  font-weight: 700;
`;

const TotalRow = styled(DetailRow)`
  opacity: 1;
  border-top: 1px solid var(--color-celeste);
  padding-top: 1rem;
`;

const TotalLabel = styled(DetailLabel)`
  font-size: 1.25rem;
`;

const TotalValue = styled(DetailValue)`
  font-size: 2rem;
  color: var(--color-amarillo-opaco);
`;


// --- El Componente ---

function VisualExampleModal({ onClose }) {
  return (
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
        
        <Title>Proceso de envío</Title>
        <Subtitle>Simulación visual del proceso de envío.</Subtitle>

        <DetailRow>
          <DetailLabel>Monto a enviar:</DetailLabel>
          <DetailValue>$100.00 USD</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Tipo de cambio:</DetailLabel>
          <DetailValue>17.50 MXN/USD</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Comisión (1.5%):</DetailLabel>
          <DetailValue>$1.50 USD</DetailValue>
        </DetailRow>
        
        <TotalRow>
          <TotalLabel>Mamá recibe:</TotalLabel>
          <TotalValue>$1,732.50 MXN</TotalValue>
        </TotalRow>
      </ModalContainer>
    </Backdrop>
  );
}

export default VisualExampleModal;