import { NavLink } from "react-router-dom";
import { Moon, Sun, Globe } from "lucide-react";
import styled from "styled-components";
// ... (Tus otras importaciones de Contexts, WalletButton, t)

// --- Definición de Styled Components ---

const NavContainer = styled.nav`
  /* ... (Tus estilos de NavContainer) ... */
  background-color: var(--color-azul-mar); 
  border-bottom: 1px solid var(--color-celeste);
  padding: 0 2rem;
  height: 4.5rem; // 72px
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 50;
`;

// 2. El Logo (¡MODIFICADO OTRA VEZ!)
const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* <-- AÑADIDO: Espacio entre logo y texto */
  text-decoration: none;
  
  /* Estilos para la imagen del logo */
  img {
    height: 2.5rem; /* 40px. Ajusta esta altura */
    width: auto;
    transition: opacity 0.2s ease;
  }

  /* --- AÑADIDO: Estilos para el texto --- */
  span {
    font-family: var(--fuente-titulos); /* ¡Cinzel! */
    font-size: 1.75rem; 
    font-weight: 700;
    color: var(--color-blanco);
    transition: color 0.2s ease;
  }

  /* Efecto hover */
  &:hover img {
    opacity: 0.85;
  }
  &:hover span {
    color: var(--color-celeste);
  }
`;

// ... (El resto de tus styled components: NavMenu, StyledNavLink, Controls, IconButton...)
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
const StyledNavLink = styled(NavLink)`
  font-family: var(--fuente-subtitulos);
  font-size: 1rem;
  color: var(--color-blanco);
  opacity: 0.8;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
    background-color: var(--color-azul-marino);
  }
  &.active {
    opacity: 1;
    background-color: var(--color-celeste);
    color: var(--color-blanco);
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const IconButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color-blanco);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--color-azul-marino);
  }
`;


// --- Tu Componente Navbar (Versión Simplificada Temporal) ---

export const Navbar = () => {
  // ... (Tu lógica de theme, lang, etc.)
  const theme = "light";

  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/enviar", label: "Enviar" },
    { path: "/historial", label: "Historial" },
    { path: "/retiro", label: "Puntos de Retiro" },
    { path: "/empresas", label: "Empresas" },
    { path: "/como-funciona", label: "Cómo funciona" },
  ];

  return (
    <NavContainer>
      {/* --- ¡CAMBIO AQUÍ! --- */}
      <LogoLink to="/">
        <img src="/images/logo.png" alt="Tlalix Logo" />
        <span>Tlalix</span> {/* <-- Texto añadido de vuelta */}
      </LogoLink>
      {/* --------------------- */}

      <NavMenu>
        {navLinks.map((link) => (
          <StyledNavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"} 
          >
            {link.label}
          </StyledNavLink>
        ))}
      </NavMenu>

      <Controls>
        {/* Placeholder para WalletButton */}
        <button style={{
          backgroundColor: 'var(--color-azul-marino)', 
          color: 'var(--color-blanco)',
          border: '1px solid var(--color-celeste)',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          fontFamily: 'var(--fuente-subtitulos)',
          cursor: 'pointer'
        }}>
          Conectar Wallet
        </button>

        <IconButton title="Toggle language">
          <Globe className="h-5 w-5" />
        </IconButton>

        <IconButton title="Toggle theme">
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </IconButton>
      </Controls>
    </NavContainer>
  );
};