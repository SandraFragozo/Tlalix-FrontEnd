import React from 'react';
import styled from 'styled-components';
import { Send, Wallet, Check, CreditCard } from 'lucide-react'; // Nuevos iconos

// --- Datos de las Tarjetas ---
const features = [
  { icon: <Send size={24} />, title: "1. Abrir enlace", text: "Mamá recibe el link por WhatsApp y lo abre en su celular." },
  { icon: <Wallet size={24} />, title: "2. Crear wallet rápida", text: "Si no tiene wallet, Tlalix crea una automáticamente." },
  { icon: <Check size={24} />, title: "3. Verificar correo", text: "Confirma su identidad con un código de 6 dígitos." },
  { icon: <CreditCard size={24} />, title: "4. Ver saldo", text: "Ve su saldo en MXN listo para retirar en efectivo." }
];

// --- Styled Components (Reutilizados de Acto 1) ---

const SectionContainer = styled.section`
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* Fondo diferente para variar */
  background-color: var(--color-azul-mar);
  border-radius: 12px;
  border: 1px solid var(--color-celeste);
  margin-top: 4rem;
`;

const Title = styled.h2`
  font-family: var(--fuente-titulos); /* Cinzel */
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-blanco);
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-family: var(--fuente-subtitulos); /* Forum */
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
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const CardContainer = styled.div`
  /* Esta vez sin fondo, para que se vea el fondo de la sección */
  background-color: transparent; 
  border: 1px solid var(--color-celeste);
  opacity: 0.9;
  border-radius: 12px;
  padding: 2rem;
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

function HowItWorksActo2() {
  return (
    <SectionContainer>
      <Title>Acto 2 - Recepción (Mamá en México)</Title>
      <Subtitle>Mamá recibe una notificación y abre el enlace seguro.</Subtitle>
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

export default HowItWorksActo2;