import React from 'react';
import styled from 'styled-components';

// 1. Importa los componentes
import PayrollHero from '@/components/empresas/PayrollHero';
import PayrollTable from '@/components/empresas/PayrollTable';
import Footer from '@/components/Footer';

const EmpresasContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem; /* Padding lateral */
  
  /* ¡Importante! El margen para que no se oculte */
  margin-top: 2rem; 
  width: 100%;
`;

// --- El Componente ---

function Empresas() {
  return (
    <>
      <EmpresasContainer>
        <PayrollHero />
        <PayrollTable />
      </EmpresasContainer>
      
      <Footer />
    </>
  );
}

export default Empresas;