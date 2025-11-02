import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// --- Imports (usando '@/' para consistencia) ---
import { Navbar } from '@/components/Navbar';
import PatternDivider from '@/components/PatternDivider';

// Vistas Principales
import Home from '@/views/Home';
import Enviar from '@/views/Enviar';
import Historial from '@/views/Historial';
import PuntosDeRetiro from '@/views/PuntosDeRetiro';
import Empresas from '@/views/Empresas';
import ComoFunciona from '@/views/ComoFunciona';

// Vistas del Footer (¡NUEVAS!)
import Privacidad from '@/views/Privacidad';
import Terminos from '@/views/Terminos';
import Contacto from '@/views/Contacto';


// ... (El resto de tus styled components: AppContainer, MainLayout, etc.)
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-azul-marino); 
`;
const MainLayout = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 0;
  z-index: 10;
`;
const LeftPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  background-image: url('/images/pattern-triangulos.png');
  background-repeat: repeat-y;
  background-size: 100% auto;
  z-index: 5;
  opacity: 0.6;
`;
const RightPattern = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 100%;
  background-image: url('/images/pattern-triangulos2.png');
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
        <LeftPattern />
        <ContentWrapper>
          <Routes>
            {/* Vistas del Navbar */}
            <Route path="/" element={<Home />} />
            <Route path="/enviar" element={<Enviar />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/retiro" element={<PuntosDeRetiro />} /> 
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            
            {/* --- ¡RUTAS DEL FOOTER ACTUALIZADAS! --- */}
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </ContentWrapper>
        <RightPattern />
      </MainLayout>
    </AppContainer>
  );
}

export default App;