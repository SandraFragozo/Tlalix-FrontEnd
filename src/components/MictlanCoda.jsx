import React from 'react';
import styled from 'styled-components';

const CodaContainer = styled.div`
  padding: 3rem 2rem 0rem 2rem;
  text-align: center;
  
  /* Usamos la misma regla 'full-bleed' del Xolo y Footer
     para asegurarnos de que el fondo azul marino sea continuo */
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
`;

const Title = styled.h2`
  font-family: var(--fuente-titulos); /* Cinzel */
  font-size: 2.5rem;
  font-weight: 700;
  
  /* Usamos el color amarillo para que resalte */
  color: var(--color-amarillo-opaco);
  
  /* Le damos un brillo sutil */
  text-shadow: 0px 2px 10px rgba(237, 165, 67, 0.4);
`;

function MictlanCoda() {
  return (
    <CodaContainer>
      <Title>¡Has llegado al Mictlán!</Title>
    </CodaContainer>
  );
}

export default MictlanCoda;