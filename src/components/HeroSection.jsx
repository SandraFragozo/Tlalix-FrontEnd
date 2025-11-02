import React from 'react';
import styled from 'styled-components';

// --- Styled Components para la sección Hero ---
// (Movimos todo esto desde Home.jsx)

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem;
  /* Creamos un degradado con tus colores */
  background: linear-gradient(145deg, var(--color-azul-mar) 0%, var(--color-verde-opaco) 100%);
  border-radius: 12px;
  color: var(--color-blanco);
`;

const Titulo = styled.h1`
  font-family: var(--fuente-titulos);
  font-size: 3.5rem; /* Tamaño grande */
  font-weight: 700;
  color: var(--color-blanco);
  line-height: 1.2;
  margin: 0;
  max-width: 800px;
`;

const Subtitulo = styled.p`
  font-family: var(--fuente-subtitulos);
  font-size: 1.25rem;
  color: var(--color-blanco);
  opacity: 0.9;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const BaseButton = styled.button`
  font-family: var(--fuente-subtitulos);
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05); /* Efecto al pasar el mouse */
  }
`;

const BotonDemo = styled(BaseButton)`
  background-color: var(--color-rosa-mexicano);
  color: var(--color-blanco);
`;

const BotonSecundario = styled(BaseButton)`
  background-color: var(--color-blanco);
  color: var(--color-azul-marino);
`;

// --- El componente HeroSection ---

function HeroSection() {
  return (
    <HeroContainer>
      <Titulo>
        Envía remesas en segundos, directo a pesos mexicanos
      </Titulo>
      <Subtitulo>
        La forma más rápida y segura de enviar dinero a México usando stablecoins
      </Subtitulo>
      <ButtonContainer>
        <BotonDemo>
          Probar demo &rarr;
        </BotonDemo>
        <BotonSecundario>
          Aprender Más
        </BotonSecundario>
      </ButtonContainer>
    </HeroContainer>
  );
}

export default HeroSection;