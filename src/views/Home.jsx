import React from 'react';
import styled from 'styled-components';

// 1. Importa todos los componentes HIJOS de la Home
import HeroSection from '@/components/HeroSection';
import WhyTlalix from '@/components/WhyTlalix';
import CTASection from '@/components/CTASection';
import XoloitzcuintleFooter from '@/components/XoloitzcuintleFooter';
import MictlanCoda from '@/components/MictlanCoda';
import Footer from '@/components/Footer';

// Contenedor para la página de Home
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// --- El Componente Home ---

function Home() {
  return (
    <HomePageContainer>
      {/* 2. Lista de todos los componentes de la Home, en orden */}

      <HeroSection />

      <WhyTlalix />

      <CTASection />

      <XoloitzcuintleFooter />

      <MictlanCoda />

      <Footer />

    </HomePageContainer>
  );
}

export default Home;