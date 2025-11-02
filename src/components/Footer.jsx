import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Usamos Link para la navegación

// --- Styled Components (con nuestros estilos) ---

const FooterContainer = styled.footer`
  /* --- LA "REGLA" PARA ABARCAR TODA LA PÁGINA --- */
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  /* ------------------------------------------- */

  background-color: var(--color-azul-mar); /* Nuestro fondo oscuro */
  border-top: 1px solid var(--color-celeste); /* Separador */
  padding: 2rem 0;
  margin-top: 4rem; /* Espacio para separarlo del Xolo */
`;

const FooterContent = styled.div`
  /* Contenedor interno que SÍ respeta el max-width */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem; /* El mismo padding lateral de la app */

  display: flex;
  justify-content: space-between; /* Logo | Links | Copyright */
  align-items: center;

  /* Para móviles, apilamos los elementos */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FooterLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;

  img {
    height: 2rem; /* Un logo un poco más pequeño que el del navbar */
    width: auto;
  }

  span {
    font-family: var(--fuente-titulos); /* ¡Cinzel! */
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-blanco);
  }
`;

const FooterLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  /* Centrado en móvil */
  @media (max-width: 768px) {
    order: 3; /* Lo mandamos al final en móvil */
  }
`;

const StyledLink = styled(Link)`
  font-family: var(--fuente-texto); /* ¡Caudex! */
  font-size: 1rem;
  color: var(--color-blanco);
  opacity: 0.8;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    text-decoration: underline;
    color: var(--color-celeste);
  }
`;

const Copyright = styled.p`
  font-family: var(--fuente-texto); /* ¡Caudex! */
  font-size: 0.9rem;
  color: var(--color-blanco);
  opacity: 0.7;
  margin: 0;

  @media (max-width: 768px) {
    order: 2; /* Lo ponemos antes de los links en móvil */
  }
`;

// --- El Componente ---

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo to="/">
          <img src="/images/logo.png" alt="Tlalix Logo" />
          <span>Tlalix</span>
        </FooterLogo>

        <FooterLinks>
          <StyledLink to="/privacidad">Privacidad</StyledLink>
          <StyledLink to="/terminos">Términos</StyledLink>
          <StyledLink to="/contacto">Contacto</StyledLink>
        </FooterLinks>

        <Copyright>
          © 2025 Tlalix. Demo educativo.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;