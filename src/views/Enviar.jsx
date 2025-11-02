import React, { useState } from 'react';
import styled from 'styled-components';

// 1. Importa todos los componentes del flujo
import Stepper from '@/components/send/Stepper';
import Step1_Monto from '@/components/send/Step1_Monto';
import Step2_Destinatario from '@/components/send/Step2_Destinatario';
import Step3_Confirmacion from '@/components/send/Step3_Confirmacion';
import Step4_Resultado from '@/components/send/Step4_Resultado';
import Footer from '@/components/Footer';

// --- Styled Components (Contenedores) ---

const EnviarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  
  /* El margen para que no se oculte detrás del Navbar */
  margin-top: 2rem; 
`;

const Title = styled.h1`
  font-family: var(--fuente-titulos);
  color: var(--color-blanco);
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

const StepCard = styled.div`
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  padding: 2.5rem;
  width: 100%;
  max-width: 550px;
  box-shadow: 0 8px 20px rgba(14, 150, 174, 0.1);
`;

// --- El Componente Principal "Enviar" ---

function Enviar() {
  // Estado para saber en qué paso estamos
  const [step, setStep] = useState(1);

  // (En una app real, aquí también guardaríamos el monto y el destinatario)
  
  // Función para reiniciar el flujo (para el botón de Step 4)
  const handleReset = () => {
    setStep(1);
    // Aquí también limpiaríamos los datos del formulario
  };

  return (
    // Usamos un Fragment (<>) para agrupar la vista y el footer
    <>
      <EnviarContainer>
        <Title>Enviar remesa</Title>
        <StepCard>
          
          {/* El componente de los 4 círculos */}
          <Stepper currentStep={step} />

          {/* --- 2. Renderizado Condicional de TODOS los pasos --- */}
          
          {step === 1 && (
            <Step1_Monto 
              onContinue={() => setStep(2)} 
            />
          )}
          
          {step === 2 && (
            <Step2_Destinatario 
              onBack={() => setStep(1)}
              onContinue={() => setStep(3)}
            />
          )}
          
          {step === 3 && (
            <Step3_Confirmacion 
              onBack={() => setStep(2)}
              onConfirm={() => setStep(4)}
            />
          )}
          
          {step === 4 && (
            <Step4_Resultado 
              onReset={handleReset}
            />
          )}
          
        </StepCard>
      </EnviarContainer>

      <Footer />
    </>
  );
}

export default Enviar;