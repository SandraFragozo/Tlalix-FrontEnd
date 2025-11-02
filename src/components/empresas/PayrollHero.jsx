import React from 'react';
import styled from 'styled-components';
import { Zap, ShieldCheck, Users } from 'lucide-react';

// --- Datos de las Tarjetas ---
const features = [
  {
    icon: <Zap size={24} />,
    title: "Pagos instantáneos",
    text: "Tu equipo recibe su nómina en segundos."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "100% trazable",
    text: "Cada transacción queda registrada en blockchain."
  },
  {
    icon: <Users size={24} />,
    title: "Sin complicaciones",
    text: "Sin cuentas bancarias internacionales."
  }
];

// --- Styled Components ---

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-family: var(--fuente-titulos); /* Cinzel */
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--color-blanco);
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-family: var(--fuente-subtitulos); /* Forum */
  font-size: 1.25rem;
  color: var(--color-blanco);
  opacity: 0.85;
  margin: 0;
  margin-bottom: 3rem;
  max-width: 600px;
`;

const Grid = styled.div`
  display: grid;
  /* 3 columnas en desktop, 1 en móvil */
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardContainer = styled.div`
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  padding: 2.5rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(14, 150, 174, 0.2);
  }
`;

const IconBackground = styled.div`
  background-color: var(--color-celeste);
  color: var(--color-azul-marino);
  padding: 0.75rem;
  border-radius: 50%; /* Círculo */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-family: var(--fuente-subtitulos); /* Forum */
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-blanco);
  margin: 0 0 0.5rem 0;
`;

const CardText = styled.p`
  font-family: var(--fuente-texto); /* Caudex */
  font-size: 1rem;
  color: var(--color-blanco);
  opacity: 0.8;
  line-height: 1.6;
  margin: 0;
`;

// --- El Componente ---

function PayrollHero() {
  return (
    <HeroContainer>
      <Title>Nómina internacional, simple y segura</Title>
      <Subtitle>
        Paga a tu equipo remoto en México con Tlalix. Sin bancos, sin demoras, sin complicaciones.
      </Subtitle>
      <Grid>
        {features.map((feature) => (
          <CardContainer key={feature.title}>
            <IconBackground>{feature.icon}</IconBackground>
            <CardTitle>{feature.title}</CardTitle>
            <CardText>{feature.text}</CardText>
          </CardContainer>
        ))}
      </Grid>
    </HeroContainer>
  );
}

export default PayrollHero;