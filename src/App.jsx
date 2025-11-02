import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Navbar } from './components/Navbar'; 
import PatternDivider from '@/components/PatternDivider'; // AÑADIDO: Importamos el divisor
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
  overflow: hidden; /* Asegura que los patrones no se salgan */
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* Ancho máximo de tu contenido principal */
  display: flex;
  flex-direction: column;
  padding: 0; /* Quitamos el padding de aquí, el Hero lo tiene */
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

// Patrón lateral derecho
const RightPattern = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px; /* Ancho del patrón */
  height: 100%;
  background-image: url('/images/pattern-triangulos.png');
  background-repeat: repeat-y;
  background-size: 100% auto;
  z-index: 5;
  opacity: 0.6;
  transform: scaleX(-1); /* Invierte el contenedor y su fondo horizontalmente */
`;


function App() {
  return (
    <AppContainer>
      <Navbar />
      <PatternDivider /> {/* AÑADIDO: El divisor de rombos */}
      
      <MainLayout>
        <LeftPattern /> {/* AÑADIDO: Patrón lateral izquierdo */}
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Rutas temporales */}
            <Route path="/enviar" element={<h2>Página de Enviar</h2>} />
            <Route path="/historial" element={<h2>Página de Historial</h2>} />
            <Route path="/retiro" element={<h2>Página de Puntos de Retiro</h2>} />
            <Route path="/empresas" element={<h2>Página de Empresas</h2>} />
            <Route path="/como-funciona" element={<h2>Página de Cómo Funciona</h2>} />
          </Routes>
        </ContentWrapper>
        <RightPattern /> {/* AÑADIDO: Patrón lateral derecho */}
      </MainLayout>
    </AppContainer>
  );
}

export default App;