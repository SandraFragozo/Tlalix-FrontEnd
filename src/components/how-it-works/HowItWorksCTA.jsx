import React from 'react';
import styled from 'styled-components';

// --- Styled Components (Reutilizados de la Home) ---

const SectionContainer = styled.section`
  background-color: var(--color-azul-mar);
  padding: 4rem 2rem;
  margin: 4rem 0;
  border-radius: 12px;
  border: 1px solid var(--color-celeste);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: var(--fuente-titulos); /* Cinzel */
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-blanco);
  margin-top: 0;
  margin-bottom: 1rem;
  max-width: 600px;
`;

const Subtitle = styled.p`
  font-family: var(--fuente-subtitulos); /* Forum */
  font-size: 1.25rem;
  color: var(--color-blanco);
  opacity: 0.85;
  margin: 0;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const ActionButton = styled.button`
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

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(83, 120, 78, 0.4);
  }
`;

// --- El Componente ---

function HowItWorksCTA() {
  return (
    <SectionContainer>
      <Title>Tlalix combina tecnología y educación</Title>
      <Subtitle>
        Para que cualquier persona pueda enviar y recibir dinero con confianza, sin necesidad de conocimientos técnicos.
      </Subtitle>
      <ActionButton>
        Probar demo
      </ActionButton>
    </SectionContainer>
  );
}

export default HowItWorksCTA;