import React from 'react';
import styled from 'styled-components';
import HeroSection from '@/components/HeroSection';
import XoloitzcuintleFooter from '@/components/XoloitzcuintleFooter'; // AÑADIDO: Importa el Xolo

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; 
  padding-top: 2rem; 
  padding-bottom: 2rem;
`;

function Home() {
  return (
    <HomePageContainer>
      <HeroSection />
      {/* ... otras secciones de tu Home ... */}

      {/* AÑADIDO: Tu componente del Xoloitzcuintle al final */}
      <XoloitzcuintleFooter /> 
    </HomePageContainer>
  );
}

export default Home;