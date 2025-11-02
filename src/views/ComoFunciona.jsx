import React from 'react';
import styled from 'styled-components';

// 1. Importa los componentes
import HowItWorksActo1 from '@/components/how-it-works/HowItWorksActo1';
import HowItWorksActo2 from '@/components/how-it-works/HowItWorksActo2'; // <-- NUEVO
import HowItWorksActo3 from '@/components/how-it-works/HowItWorksActo3'; // <-- NUEVO
import HowItWorksQR from '@/components/how-it-works/HowItWorksQR'; // <-- NUEVO
import HowItWorksCTA from '@/components/how-it-works/HowItWorksCTA';
import HowItWorksFAQ from '@/components/how-it-works/HowItWorksFAQ';
// (Aquí importaremos los otros actos y el FAQ)
import Footer from '@/components/Footer';

const ComoFuncionaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem; 
  width: 100%;
`;

// --- El Componente ---

function ComoFunciona() {
  return (
    <>
      <ComoFuncionaContainer>
        
        <HowItWorksActo1 />
        
        <HowItWorksActo2 /> {/* <-- AÑADIDO */}
        
        <HowItWorksActo3 /> {/* <-- AÑADIDO */}
        
        <HowItWorksQR />    {/* <-- AÑADIDO */}
        
        <HowItWorksCTA />

        <HowItWorksFAQ />

      </ComoFuncionaContainer>
      
      <Footer />
    </>
  );
}

export default ComoFunciona;