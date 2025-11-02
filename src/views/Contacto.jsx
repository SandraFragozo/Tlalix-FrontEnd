import React from 'react';
import styled from 'styled-components';
import Footer from '@/components/Footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 2rem;
  width: 100%;
  align-items: center;
  flex-grow: 1; /* Para empujar el footer hacia abajo */
`;

const Title = styled.h1`
  font-family: var(--fuente-titulos);
  color: var(--color-blanco);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

// Estilos de contenido para texto de contacto
const Content = styled.div`
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  padding: 2.5rem 3rem;
  width: 100%;
  max-width: 800px;
  text-align: center; /* Centramos el texto */
  
  p, li {
    font-family: var(--fuente-texto); /* Caudex */
    color: var(--color-blanco);
    opacity: 0.85;
    line-height: 1.7;
    font-size: 1.1rem;
  }

  h3 {
    font-family: var(--fuente-subtitulos); /* Forum */
    color: var(--color-celeste);
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  
  a {
    color: var(--color-amarillo-opaco);
    font-weight: 700;
    text-decoration: none;
    word-break: break-all; /* Para que los emails no se desborden */
  }

  /* Placeholder/aviso */
  small {
    display: block;
    margin-top: 1rem;
    opacity: 0.6;
    font-family: var(--fuente-texto);
    color: var(--color-blanco);
  }
`;

function Contacto() {
  return (
    <>
      <PageContainer>
        <Title>Contacto</Title>
        <Content>
          <h3>Contacto Legal</h3>
          <p>
            <a href="mailto:legal@tlalix.io">legal@tlalix.io</a>
          </p>
          
          <h3>Soporte</h3>
          <p>
            <a href="mailto:soporte@tlalix.io">soporte@tlalix.io</a>
          </p>
          <p>
            WhatsApp: +52 229 136 8449
          </p>
          
          <small></small>
        </Content>
      </PageContainer>
      <Footer />
    </>
  );
}

export default Contacto;