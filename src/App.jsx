import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Navbar } from './components/Navbar';
import PatternDivider from '@/components/PatternDivider';
import Home from './views/Home';
// ... (otras importaciones de vistas si las tienes)

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Fondo principal de la app */
  background-color: var(--color-azul-marino); 
`;

const MainLayout = styled.div`
  flex-grow: 1; /* Ocupa el espacio restante */
  display: flex;
  justify-content: center; /* Centra el contenido */
  position: relative;
  overflow: hidden; /* Esto estaba en esa versión */
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* Ancho máximo de tu contenido principal */
  display: flex;
  flex-direction: column;
  padding: 0; /* <-- Este padding: 0 es el que causa el solapamiento superior */
  z-index: 10; /* Asegura que el contenido esté sobre los patrones */
`;

// Patrón lateral izquierdo
const LeftPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px; /* Ancho del patrón */
  height: 100%;
  background-image: url('/images/pattern-triangulos.png');
  background-repeat: repeat-y; /* Repite verticalmente */
  background-size: 100% auto; /* Ajusta el ancho al 100%, altura automática */
  z-index: 5; /* Detrás del contenido */
  opacity: 0.6; /* Un poco de transparencia */
`;

// Patrón lateral derecho (MODIFICADO COMO PEDISTE)
const RightPattern = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px; /* Ancho del patrón */
  height: 100%;
  
  /* --- CAMBIO AQUÍ --- */
  background-image: url('/images/pattern-triangulos2.png'); /* <-- Usando tu nueva imagen */
  /* transform: scaleX(-1); <-- ELIMINADO */
  
  background-repeat: repeat-y;
  background-size: 100% auto;
  z-index: 5;
  opacity: 0.6;
`;


function App() {
  return (
    <AppContainer>
      <Navbar />
      <PatternDivider />

      <MainLayout>
        {/* Los patrones están "clavados" a la ventana */}
        <LeftPattern />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* ... (tus otras rutas) ... */}
          </Routes>
        </ContentWrapper>
        <RightPattern />
      </MainLayout>
    </AppContainer>
  );
}

export default App;