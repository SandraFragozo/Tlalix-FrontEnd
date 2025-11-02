import React, { useState } from 'react';
import styled from 'styled-components';
import { Wallet, UserPlus, CheckSquare, Link as LinkIcon } from 'lucide-react';
import VisualExampleModal from './VisualExampleModal'; // Importamos el modal

// --- Datos de las Tarjetas ---
const features = [
  { icon: <Wallet size={24} />, title: "1. Conectar wallet", text: "Juan conecta su wallet de MetaMask o usa su correo electrónico." },
  { icon: <UserPlus size={24} />, title: "2. Ingresar destinatario", text: "Escribe el alias ENS o correo de mamá: mama@email.com" },
  { icon: <CheckSquare size={24} />, title: "3. Confirmar transacción", text: "Revisa el monto, comisión (1.5%) y tipo de cambio." },
  { icon: <LinkIcon size={24} />, title: "4. Generar enlace", text: "Se crea un link seguro /r/ABC123 y un QR para compartir." }
];

// --- Styled Components (Reutilizados y adaptados) ---

const SectionContainer = styled.section`
  padding: 4rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: var(--fuente-titulos); /* Cinzel */
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-blanco);
  text-align: center;
  margin-top: 0;
  margin-bottom: 3rem;
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
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  padding: 2rem;
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

const ExampleButton = styled.button`
  font-family: var(--fuente-subtitulos);
  font-size: 1.1rem;
  font-weight: 700;
  background-color: var(--color-rosa-mexicano);
  color: var(--color-blanco);
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 3rem;

  &:hover {
    transform: scale(1.05);
  }
`;

// --- El Componente ---

function HowItWorksActo1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SectionContainer>
      <Title>Acto 1 - Proceso de envío (Juan en USA)</Title>
      <Grid>
        {features.map((feature) => (
          <CardContainer key={feature.title}>
            <IconBackground>{feature.icon}</IconBackground>
            <CardTitle>{feature.title}</CardTitle>
            <CardText>{feature.text}</CardText>
          </CardContainer>
        ))}
      </Grid>
      
      <ExampleButton onClick={() => setIsModalOpen(true)}>
        Ver ejemplo visual
      </ExampleButton>

      {/* Renderizado condicional del modal */}
      {isModalOpen && <VisualExampleModal onClose={() => setIsModalOpen(false)} />}
    </SectionContainer>
  );
}

export default HowItWorksActo1;