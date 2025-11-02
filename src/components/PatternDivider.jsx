import React from 'react';
import styled from 'styled-components';

const DividerContainer = styled.div`
  /* Usa tus colores de fondo */
  background-color: var(--color-azul-marino); 
  height: 25px; /* Altura de la franja */
  
  /* Repetimos la imagen horizontalmente */
  background-image: url('/images/pattern-rombos.png');
  background-repeat: repeat-x; /* Repite solo horizontalmente */
  background-size: auto 100%; /* Ajusta la altura al 100%, ancho automático */
  
  /* Asegura que se quede fijo junto al navbar */
  position: sticky;
  top: 4.5rem; /* Ajusta esto a la altura de tu Navbar (72px) */
  z-index: 49; /* Justo debajo del navbar */
`;

function PatternDivider() {
    return <DividerContainer />;
}

export default PatternDivider;