import React from 'react';
import styled from 'styled-components';

// --- Estilos Reutilizables ---

const StepTitle = styled.h2`
  font-family: var(--fuente-titulos);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-blanco);
  text-align: center;
  margin: 0 0 2rem 0;
`;

const DetailContainer = styled.div`
  border: 1px dashed var(--color-celeste);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-azul-marino);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const DetailLabel = styled.span`
  font-family: var(--fuente-texto); /* Caudex */
  color: var(--color-blanco);
  opacity: 0.8;
  font-size: 1rem;
`;

const DetailValue = styled.span`
  font-family: var(--fuente-subtitulos); /* Forum */
  color: var(--color-blanco);
  font-size: 1.25rem;
  font-weight: 700;
  text-align: right;
`;

const TotalValue = styled(DetailValue)`
  font-size: 1.75rem;
  color: var(--color-amarillo-opaco);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
`;

const BaseButton = styled.button`
  font-family: var(--fuente-subtitulos);
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
`;

const PrimaryButton = styled(BaseButton)`
  background-color: var(--color-verde-opaco);
  color: var(--color-blanco);
  border: none;
  &:hover { transform: scale(1.02); }
`;

const SecondaryButton = styled(BaseButton)`
  background-color: var(--color-azul-marino);
  color: var(--color-celeste);
  border: 1px solid var(--color-celeste);
  &:hover { 
    background-color: var(--color-celeste);
    color: var(--color-azul-marino);
  }
`;

// --- El Componente ---

function Step3_Confirmacion({ onConfirm, onBack }) {
  // Estos datos vendrían del estado de Enviar.jsx
  const monto = 5.00;
  const comision = 0.07;
  const destinatario = "sandra"; // (o "mama@email.com")
  const totalMXN = "86.27";

  return (
    <div>
      <StepTitle>Paso 3: Confirmar detalles</StepTitle>

      <DetailContainer>
        <DetailRow>
          <DetailLabel>Monto:</DetailLabel>
          <DetailValue>${monto.toFixed(2)} USD</DetailValue>
        </DetailRow>
        
        <DetailRow>
          <DetailLabel>Comisión (1.5%):</DetailLabel>
          <DetailValue>${comision.toFixed(2)} USD</DetailValue>
        </DetailRow>

        <DetailRow>
          <DetailLabel>Destinatario:</DetailLabel>
          <DetailValue>{destinatario}</DetailValue>
        </DetailRow>
        
        <DetailRow>
          <DetailLabel>Recibirá:</DetailLabel>
          <TotalValue>${totalMXN} MXN</TotalValue>
        </DetailRow>
      </DetailContainer>

      <ButtonContainer>
        <SecondaryButton onClick={onBack}>
          &larr; Atrás
        </SecondaryButton>
        <PrimaryButton onClick={onConfirm}>
          Confirmar envío
        </PrimaryButton>
      </ButtonContainer>
    </div>
  );
}

export default Step3_Confirmacion;