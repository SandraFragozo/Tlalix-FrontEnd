import React from 'react';
import styled from 'styled-components';

const XoloContainer = styled.div`
  width: 100%;
  height: 500px; /* Ajusta la altura según necesites */
  background-image: url('/images/xoloitzcuintle.png');
  background-size: cover; /* Cubre todo el componente */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* No repite la imagen */
  border-radius: 12px;
  
  /* Efecto para "llegar al inframundo" (opcional, puedes ajustarlo) */
  box-shadow: inset 0px -50px 100px -30px rgba(0,0,0,0.75); /* Sombra en la parte inferior */
  margin-top: 4rem; /* Espacio arriba */

  display: flex;
  align-items: flex-end; /* Alinea el contenido (si lo hubiera) abajo */
  justify-content: center;
  color: var(--color-blanco);
  font-family: var(--fuente-texto);
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  padding-bottom: 2rem;
`;

function XoloitzcuintleFooter() {
  return (
    <XoloContainer>
      {/* Puedes agregar un texto o algo aquí si quieres */}
      {/* <p>Viaje al Mictlán</p> */}
    </XoloContainer>
  );
}

export default XoloitzcuintleFooter;