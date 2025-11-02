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

// Estilos de contenido para texto legal
const Content = styled.div`
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  padding: 2.5rem 3rem;
  width: 100%;
  max-width: 800px;
  
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
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  ul {
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }

  p:first-of-type {
    font-style: italic;
    opacity: 0.6;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  a {
    color: var(--color-amarillo-opaco);
    font-weight: 700;
    text-decoration: none;
  }
`;

function Privacidad() {
  return (
    <>
      <PageContainer>
        <Title>POLÍTICA DE PRIVACIDAD — TLALIX</Title>
        <Content>
          <p>Versión 1.0 — Última actualización: 2025</p>
          
          <h3>1. Datos que recopilamos</h3>
          <ul>
            <li>Nombre o alias</li>
            <li>Número de teléfono</li>
            <li>Historial de transacciones (sin datos bancarios)</li>
            <li>Dirección de wallet</li>
            <li>Identificación (solo si se solicita por cumplimiento legal)</li>
          </ul>
          <p>No recopilamos frases semilla ni claves privadas.</p>

          <h3>2. Finalidad del tratamiento</h3>
          <ul>
            <li>Procesar envíos y retiros</li>
            <li>Autenticar identidad del usuario</li>
            <li>Gestión operativa y seguridad del servicio</li>
            <li>Cumplimiento regulatorio si aplica</li>
          </ul>
          <p>No utilizamos la información para fines publicitarios externos.</p>
          
          <h3>3. Blockchain y privacidad</h3>
          <p>
            Las transacciones son públicas por naturaleza del blockchain.
            Tlalix no almacena datos personales en la cadena.
          </p>

          <h3>4. Derechos del usuario</h3>
          <p>El usuario puede solicitar:</p>
          <ul>
            <li>Acceso a sus datos</li>
            <li>Corrección de información</li>
            <li>Eliminación de sus datos (si la ley lo permite)</li>
          </ul>
          <p>
            Solicitud a: <a href="mailto:privacidad@tlalix.io">privacidad@tlalix.io</a>
          </p>
        </Content>
      </PageContainer>
      <Footer />
    </>
  );
}

export default Privacidad;