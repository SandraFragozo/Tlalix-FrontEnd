import React from 'react';
import styled from 'styled-components';
import { X, QrCode } from 'lucide-react';

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
  max-width: 400px;
  position: relative;
  text-align: center;
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
  &:hover { opacity: 1; }
`;

const Title = styled.h2`
  font-family: var(--fuente-titulos);
  color: var(--color-blanco);
  font-size: 1.75rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const QRIconWrapper = styled.div`
  background-color: var(--color-blanco);
  padding: 1.5rem;
  border-radius: 8px;
  display: inline-flex;
  margin-bottom: 1.5rem;
  svg { color: var(--color-negro); width: 100px; height: 100px; }
`;

const PinCode = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-amarillo-opaco);
  margin: 0 0 1rem 0;
  letter-spacing: 0.25rem;
`;

const Expiry = styled.p`
  font-family: var(--fuente-texto);
  color: var(--color-blanco);
  opacity: 0.8;
  font-size: 0.9rem;
  margin: 0;
`;

const Instructions = styled.p`
  font-family: var(--fuente-texto);
  color: var(--color-blanco);
  background-color: var(--color-azul-marino);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 0.9rem;
`;

function PinQrModal({ storeName, pin, onClose }) {
  return (
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}><X size={24} /></CloseButton>
        <Title>PIN de retiro ({storeName})</Title>
        <QRIconWrapper><QrCode /></QRIconWrapper>
        <PinCode>{pin}</PinCode>
        <Expiry>Válido por 24 horas</Expiry>
        <Instructions>
          Muestra este código en la tienda para retirar tu dinero en efectivo.
        </Instructions>
      </ModalContainer>
    </Backdrop>
  );
}

export default PinQrModal;