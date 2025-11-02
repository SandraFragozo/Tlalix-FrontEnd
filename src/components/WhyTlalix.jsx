import React from 'react';
import styled from 'styled-components';
import { DollarSign, Zap, ShieldCheck, MapPin } from 'lucide-react';

// --- Datos de las Tarjetas (esto no cambia) ---
const features = [
  {
    icon: <DollarSign size={24} />,
    title: "Comisión baja",
    text: "Solo 1.5% de comisión. Sin costos ocultos."
  },
  {
    icon: <Zap size={24} />,
    title: "Envío instantáneo",
    text: "Tu dinero llega en segundos, no en días."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "100% seguro",
    text: "Tecnología blockchain para máxima seguridad."
  },
  {
    icon: <MapPin size={24} />,
    title: "Retiros fáciles",
    text: "Miles de puntos de retiro en todo México."
  }
];

// --- Styled Components (¡Ahora con nuestros estilos!) ---

const SectionContainer = styled.section`
  /* Ya no tiene fondo blanco, se mezcla con el fondo 
     azul marino de la página */
  padding: 5rem 2rem;
  /* (El padding-top/bottom nos da el espacio 
     después del Hero y antes del Xolo) */
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-family: var(--fuente-titulos); /* ¡Cinzel! */
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-blanco); /* Color claro para fondo oscuro */
  text-align: center;
  margin-top: 0;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CardContainer = styled.div`
  background-color: var(--color-azul-mar); /* ¡Nuestro color! */
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid var(--color-celeste); /* Borde con acento */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(14, 150, 174, 0.2); /* Sombra color celeste */
  }
`;

const IconBackground = styled.div`
  background-color: var(--color-celeste); /* ¡Nuestro acento! */
  color: var(--color-azul-marino); /* Icono oscuro */
  padding: 0.75rem;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-family: var(--fuente-subtitulos); /* ¡Forum! */
  font-size: 1.5rem; /* Más grande para que luzca Forum */
  font-weight: 400; /* Forum es mejor en 400 */
  color: var(--color-blanco);
  margin: 0 0 0.5rem 0;
`;

const CardText = styled.p`
  font-family: var(--fuente-texto); /* ¡Caudex! */
  font-size: 1rem;
  color: var(--color-blanco);
  opacity: 0.85; /* Un poco de opacidad para diferenciarlo */
  line-height: 1.6;
  margin: 0;
`;

// --- El Componente ---

function WhyTlalix() {
  return (
    <SectionContainer>
      <SectionTitle>¿Por qué Tlalix?</SectionTitle>
      <Grid>
        {features.map((feature) => (
          <CardContainer key={feature.title}>
            <IconBackground>{feature.icon}</IconBackground>
            <CardTitle>{feature.title}</CardTitle>
            <CardText>{feature.text}</CardText>
          </CardContainer>
        ))}
      </Grid>
    </SectionContainer>
  );
}

export default WhyTlalix;