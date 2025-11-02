import React from 'react';
import styled from 'styled-components';

// 1. Importa todos los componentes de tu página
import HeroSection from '@/components/HeroSection';
import WhyTlalix from '@/components/WhyTlalix';
import CTASection from '@/components/CTASection'; // <-- ¡El nuevo!
import XoloitzcuintleFooter from '@/components/XoloitzcuintleFooter';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <HomePageContainer>
      {/* 2. Este es el orden final de tu Home */}

      <HeroSection />

      <WhyTlalix />

      <CTASection /> {/* <-- ¡Añadido aquí! */}

      <XoloitzcuintleFooter />

    </HomePageContainer>
  );
}

export default Home;