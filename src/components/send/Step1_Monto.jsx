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

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  font-family: var(--fuente-texto);
  font-size: 0.9rem;
  color: var(--color-blanco);
  opacity: 0.9;
  margin-bottom: 0.5rem;
  display: block;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  font-family: var(--fuente-texto);
  background-color: var(--color-azul-marino);
  border: 1px solid var(--color-celeste);
  border-radius: 8px;
  color: var(--color-blanco);

  &:focus {
    outline: none;
    border-color: var(--color-blanco);
  }
`;

const ConversionInfo = styled.div`
  border: 1px dashed var(--color-celeste);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  margin: 2rem 0;
`;

const ConversionLabel = styled.p`
  font-family: var(--fuente-texto);
  color: var(--color-blanco);
  opacity: 0.8;
  margin: 0;
  font-size: 0.9rem;
`;

const ConversionAmount = styled.p`
  font-family: var(--fuente-subtitulos);
  color: var(--color-amarillo-opaco);
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0.5rem 0 0 0;
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

  &:hover {
    transform: scale(1.02);
  }
`;

// --- El Componente ---

function Step1_Monto({ onContinue }) {
  return (
    <div>
      <StepTitle>Paso 1: Ingresa el monto</StepTitle>

      <FormGroup>
        <FormLabel htmlFor="monto">Monto en USD</FormLabel>
        <FormInput 
          type="number" 
          id="monto" 
          defaultValue="5" 
        />
      </FormGroup>

      <ConversionInfo>
        <ConversionLabel>Tipo de cambio: 17.5 MXN/USD (Hardcodeado)</ConversionLabel>
        <ConversionLabel>Recibirá:</ConversionLabel>
        <ConversionAmount>$86.27 MXN</ConversionAmount>
      </ConversionInfo>

      <PrimaryButton onClick={onContinue}>
        Continuar &rarr;
      </PrimaryButton>
    </div>
  );
}

export default Step1_Monto;