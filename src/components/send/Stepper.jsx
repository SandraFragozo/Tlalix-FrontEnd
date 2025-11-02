import React from 'react';
import styled from 'styled-components';

const StepperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto 2.5rem auto;
  max-width: 400px;
  position: relative;
`;

const StepLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-celeste);
  opacity: 0.3;
  transform: translateY(-50%);
  z-index: 1;
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

const StepCircle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-family: var(--fuente-titulos);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  
  background-color: ${({ $isActive }) => $isActive ? 'var(--color-celeste)' : 'var(--color-azul-mar)'};
  border: 2px solid var(--color-celeste);
  color: ${({ $isActive }) => $isActive ? 'var(--color-azul-marino)' : 'var(--color-blanco)'};
`;

const StepLabel = styled.span`
  font-family: var(--fuente-texto);
  font-size: 0.8rem;
  color: var(--color-blanco);
  opacity: 0.8;
`;

const steps = ["Monto", "Destinatario", "Confirmación", "Resultado"];

function Stepper({ currentStep }) {
  return (
    <StepperContainer>
      <StepLine />
      {steps.map((label, index) => (
        <StepWrapper key={label}>
          <StepCircle $isActive={index + 1 === currentStep}>
            {index + 1}
          </StepCircle>
          <StepLabel>{label}</StepLabel>
        </StepWrapper>
      ))}
    </StepperContainer>
  );
}

export default Stepper;