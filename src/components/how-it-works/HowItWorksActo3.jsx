import React from 'react';
import styled from 'styled-components';
import { Store, QrCode, Smile } from 'lucide-react'; // Nuevos iconos

// --- Datos de las Tarjetas ---
const features = [
  { icon: <Store size={24} />, title: "1. Seleccionar tienda", text: "Busca el punto de retiro más cercano: OXXO, Aurrera, etc." },
  { icon: <QrCode size={24} />, title: "2. Generar PIN/QR", text: "Tlalix crea un código de 6 dígitos válido por 24 horas." },
  { icon: <Smile size={24} />, title: "3. Retirar efectivo", text: "Muestra el QR en la tienda y recibe pesos mexicanos." }
];

// --- Styled Components (Reutilizados) ---
const SectionContainer = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;
const Title = styled.h2`
  font-family: var(--fuente-titulos);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-blanco);
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;
const Subtitle = styled.p`
  font-family: var(--fuente-subtitulos);
  font-size: 1.25rem;
  color: var(--color-blanco);
  opacity: 0.85;
  margin: 0;
  margin-bottom: 3rem;
  max-width: 600px;
  text-align: center;
`;
const Grid = styled.div`
  display: grid;
  /* 3 columnas */
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const CardContainer = styled.div`
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  padding: 2.5rem;
  opacity: 0.9;
`;
const IconBackground = styled.div`
  background-color: var(--color-celeste);
  color: var(--color-azul-marino);
  padding: 0.75rem;
  border-radius: 8px;
  display: inline-flex;
  margin-bottom: 1.5rem;
`;
const CardTitle = styled.h3`
  font-family: var(--fuente-subtitulos);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-blanco);
  margin: 0 0 0.5rem 0;
`;
const CardText = styled.p`
  font-family: var(--fuente-texto);
  font-size: 1rem;
  color: var(--color-blanco);
  opacity: 0.8;
  line-height: 1.6;
  margin: 0;
`;

// --- El Componente ---

function HowItWorksActo3() {
  return (
    <SectionContainer>
      <Title>Acto 3 - Retiro (Comercio local)</Title>
      <Subtitle>Mamá va a su tienda más cercana y retira en efectivo.</Subtitle>
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

export default HowItWorksActo3;