import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Loader, CheckCircle, QrCode } from 'lucide-react';

// --- Estilos ---

const StepTitle = styled.h2`
  font-family: var(--fuente-titulos);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-blanco);
  text-align: center;
  margin: 0 0 2rem 0;
`;

// --- Estilos de Carga (Spinner) ---
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(Loader)`
  color: var(--color-celeste);
  width: 60px;
  height: 60px;
  animation: ${spinAnimation} 1.5s linear infinite;
`;

const LoadingText = styled.p`
  font-family: var(--fuente-texto);
  font-size: 1rem;
  color: var(--color-blanco);
  opacity: 0.8;
  margin-top: 1.5rem;
`;

// --- Estilos de Resultado (Éxito) ---

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SuccessIcon = styled(CheckCircle)`
  color: var(--color-verde-opaco);
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
`;

const QRBlock = styled.div`
  background-color: var(--color-blanco);
  border-radius: 12px;
  padding: 2rem;
  margin: 1.5rem 0;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const QRIconWrapper = styled.div`
  svg {
    color: var(--color-negro);
    width: 120px;
    height: 120px;
  }
`;

const QRLabel = styled.p`
  font-family: var(--fuente-texto);
  color: var(--color-negro);
  font-size: 0.9rem;
  margin: 0;
`;

const QRCodeValue = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-negro);
  background-color: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  margin: 0;
`;

const PrimaryButton = styled.button`
  font-family: var(--fuente-subtitulos);
  font-size: 1.1rem;
  font-weight: 700;
  background-color: var(--color-verde-opaco);
  color: var(--color-blanco);
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover { transform: scale(1.02); }
`;

// --- El Componente ---

function Step4_Resultado({ onReset }) {
  const [isLoading, setIsLoading] = useState(true);

  // Simula el tiempo de procesamiento de la transacción
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Simula 2.5 segundos de carga

    // Limpia el timer si el componente se desmonta
    return () => clearTimeout(timer);
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  // --- Vista de Carga ---
  if (isLoading) {
    return (
      <div>
        <StepTitle>Paso 4: Resultado</StepTitle>
        <LoadingContainer>
          <Spinner />
          <LoadingText>Procesando transacción...</LoadingText>
        </LoadingContainer>
      </div>
    );
  }

  // --- Vista de Éxito ---
  return (
    <div>
      <StepTitle>Paso 4: Resultado</StepTitle>
      <ResultContainer>
        <SuccessIcon />
        <h3 style={{ fontFamily: 'var(--fuente-titulos)', color: 'var(--color-blanco)', margin: 0, fontSize: '1.5rem' }}>
          ¡Remesa enviada!
        </h3>
        
        <QRBlock>
          <QRIconWrapper>
            <QrCode />
          </QRIconWrapper>
          <QRLabel>Código:</QRLabel>
          <QRCodeValue>9RWCVP</QRCodeValue>
        </QRBlock>
        
        {/* El botón onReset no lo pasamos ahora, pero lo dejamos listo */}
        <PrimaryButton onClick={onReset}> 
          Enviar otra remesa
        </PrimaryButton>
      </ResultContainer>
    </div>
  );
}

export default Step4_Resultado;