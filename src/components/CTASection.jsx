import React from 'react';
import styled from 'styled-components';

// --- Styled Components (con nuestros estilos) ---

const SectionContainer = styled.section`
  /* Usamos un color de fondo de nuestra paleta */
  background-color: var(--color-azul-mar);
  padding: 4rem 2rem;
  margin: 4rem 0; /* Espacio para separarlo de los otros componentes */
  
  /* Redondeado y borde, igual que las tarjetas */
  border-radius: 12px;
  border: 1px solid var(--color-celeste);
  
  /* Centramos todo el contenido */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: var(--fuente-titulos); /* ¡Cinzel! */
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-blanco);
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-family: var(--fuente-subtitulos); /* ¡Forum! */
  font-size: 1.25rem;
  color: var(--color-blanco);
  opacity: 0.85;
  margin: 0;
  margin-bottom: 2rem;
  max-width: 600px; /* Evita que el texto sea demasiado ancho */
`;

const ActionButton = styled.button`
  font-family: var(--fuente-subtitulos); /* ¡Forum! */
  font-size: 1.1rem;
  font-weight: 700; /* Lo hacemos más 'bold' */
  
  /* Usamos el verde opaco de nuestra paleta */
  background-color: var(--color-verde-opaco);
  color: var(--color-blanco);
  
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(83, 120, 78, 0.4); /* Sombra verde opaco */
  }
`;

// --- El Componente ---

function CTASection() {
  return (
    <SectionContainer>
      <Title>¿Listo para empezar?</Title>
      <Subtitle>
        Prueba Tlalix ahora y descubre lo fácil que es enviar dinero a México.
      </Subtitle>
      <ActionButton>
        Ver cómo funciona
      </ActionButton>
    </SectionContainer>
  );
}

export default CTASection;