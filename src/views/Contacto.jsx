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
  flex-grow: 1;
`;

const Title = styled.h1`
  font-family: var(--fuente-titulos);
  color: var(--color-blanco);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled.div`
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  padding: 2.5rem;
  width: 100%;
  max-width: 800px;
  
  p {
    font-family: var(--fuente-texto);
    color: var(--color-blanco);
    opacity: 0.85;
    line-height: 1.7;
    font-size: 1.1rem;
    text-align: center;
  }
`;

function Contacto() {
  return (
    <>
      <PageContainer>
        <Title>Contacto</Title>
        <Content>
          <p>
            Para soporte o preguntas, por favor contáctanos en:
            <br />
            <strong>soporte@tlalix.demo</strong>
          </p>
        </Content>
      </PageContainer>
      <Footer />
    </>
  );
}

export default Contacto;