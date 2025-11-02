import { NavLink } from "react-router-dom";
import { Moon, Sun, Globe } from "lucide-react"; // Esto ya funcionará
import styled from "styled-components";

// --- Importaciones TEMPORALMENTE comentadas ---
// import { useTheme } from "@/contexts/ThemeContext";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { WalletButton } from "@/components/WalletButton";
// import { t } from "@/lib/i18n";

// --- Definición de Styled Components (esto no cambia) ---
const NavContainer = styled.nav`
  background-color: var(--color-azul-mar); 
  border-bottom: 1px solid var(--color-celeste);
  padding: 0 2rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 50;
`;

const LogoLink = styled(NavLink)`
  font-family: var(--fuente-titulos);
  font-size: 1.75rem; 
  font-weight: 700;
  color: var(--color-blanco);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-celeste);
  }
`;

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

// --- Componente Navbar (Versión Simplificada) ---

export const Navbar = () => {
    // --- Lógica de estado TEMPORALMENTE comentada ---
    // const { theme, toggleTheme } = useTheme();
    // const { lang, setLang } = useLanguage();

    // Valores de ejemplo para que no falle:
    const theme = "light";
    // const lang = "es";

    // Links con texto en lugar de la función t()
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
            <LogoLink to="/">
                Tlalix
            </LogoLink>

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
                {/* El WalletButton está comentado por ahora */}
                {/* <StyledWalletButton /> */}

                {/* Botón temporal de placeholder para Wallet */}
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

                <IconButton
                    // onClick={() => setLang(lang === "es" ? "en" : "es")}
                    title="Toggle language"
                >
                    <Globe className="h-5 w-5" />
                </IconButton>

                <IconButton
                    // onClick={toggleTheme}
                    title="Toggle theme"
                >
                    {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </IconButton>
            </Controls>
        </NavContainer>
    );
};