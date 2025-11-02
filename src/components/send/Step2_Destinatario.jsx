import React from 'react';
import styled from 'styled-components';

// --- Estilos Reutilizables (Importados o copiados de Step 1) ---
// Para un proyecto más grande, moveríamos esto a un archivo compartido.

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

function Step2_Destinatario({ onContinue, onBack }) {
  return (
    <div>
      <StepTitle>Paso 2: Destinatario</StepTitle>

      <FormGroup>
        <FormLabel htmlFor="destinatario">Alias ENS o correo</FormLabel>
        <FormInput 
          type="text" 
          id="destinatario" 
          placeholder="mama@email.com" // Placeholder del video
        />
      </FormGroup>

      {/* (Aquí podría ir un botón de "Contactos" como en el video) */}

      <ButtonContainer>
        <SecondaryButton onClick={onBack}>
          &larr; Atrás
        </SecondaryButton>
        <PrimaryButton onClick={onContinue}>
          Continuar &rarr;
        </PrimaryButton>
      </ButtonContainer>
    </div>
  );
}

export default Step2_Destinatario;