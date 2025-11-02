import React, { useState } from 'react';
import styled from 'styled-components';

// 1. Importa los componentes de los pasos
import Stepper from '@/components/send/Stepper';
import Step1_Monto from '@/components/send/Step1_Monto';
import Footer from '@/components/Footer'; // <-- 2. IMPORTA EL FOOTER

const EnviarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
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

// --- El Componente ---

function Enviar() {
  const [step, setStep] = useState(1);

  return (
    // 3. Usa un Fragment (<>) para agrupar la vista y el footer
    <>
      <EnviarContainer>
        <Title>Enviar remesa</Title>
        <StepCard>
          
          <Stepper currentStep={step} />

          {step === 1 && (
            <Step1_Monto 
              onContinue={() => setStep(2)} 
            />
          )}
          
          {/* (Placeholders para los otros pasos) */}
          {step === 2 && (
            <div>
              <h2 style={{color: 'white', fontFamily: 'var(--fuente-titulos)'}}>Paso 2: Destinatario</h2>
              <button onClick={() => setStep(1)}>Atrás</button>
              <button onClick={() => setStep(3)}>Continuar</button>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 style={{color: 'white', fontFamily: 'var(--fuente-titulos)'}}>Paso 3: Confirmación</h2>
              <button onClick={() => setStep(2)}>Atrás</button>
              <button onClick={() => setStep(4)}>Confirmar</button>
            </div>
          )}
          {step === 4 && (
            <div>
              <h2 style={{color: 'white', fontFamily: 'var(--fuente-titulos)'}}>Paso 4: Resultado</h2>
            </div>
          )}
        </StepCard>
      </EnviarContainer>

      <Footer /> {/* <-- 4. AÑADE EL FOOTER AL FINAL */}
    </>
  );
}

export default Enviar;