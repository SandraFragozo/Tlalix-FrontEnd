import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';

// --- Datos Hardcodeados ---
const faqData = [
  {
    question: "¿Necesito saber de criptomonedas?",
    answer: "No. Tlalix se encarga de toda la complejidad técnica. Solo necesitas un correo electrónico."
  },
  {
    question: "¿Qué pasa si pierdo conexión?",
    answer: "Tu transacción se pausará. Una vez que recuperes la conexión, podrás continuar desde donde te quedaste sin perder tu dinero."
  },
  {
    question: "¿Puedo retirar sin wallet?",
    answer: "Sí. El destinatario en México no necesita una wallet. Genera un PIN o código QR de 6 dígitos y puede retirar en cualquier comercio afiliado."
  },
  {
    question: "¿Qué seguridad ofrece Tlalix?",
    answer: "Usamos contratos inteligentes (smart contracts) auditados y encriptación de grado bancario para todas las transacciones y datos de usuario."
  }
];

// --- Styled Components ---

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
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

const FAQList = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AccordionItem = styled.div`
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  overflow: hidden; /* Para el efecto de slide */
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  
  &:hover {
    background-color: var(--color-azul-marino);
  }
`;

const QuestionText = styled.h3`
  font-family: var(--fuente-subtitulos); /* Forum */
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-blanco);
  margin: 0;
`;

const IconWrapper = styled.div`
  color: var(--color-celeste);
  transition: transform 0.3s ease;
  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
`;

const AccordionContent = styled.div`
  /* El truco del acordeón con max-height */
  max-height: ${({ $isOpen }) => ($isOpen ? '150px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const AnswerText = styled.p`
  font-family: var(--fuente-texto); /* Caudex */
  font-size: 1rem;
  color: var(--color-blanco);
  opacity: 0.85;
  line-height: 1.6;
  margin: 0;
  padding: 0 1.5rem 1.5rem 1.5rem;
`;

// --- El Componente ---

function HowItWorksFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Función para abrir/cerrar un item
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Cierra el que ya estaba abierto
    } else {
      setOpenIndex(index); // Abre el nuevo
    }
  };

  return (
    <SectionContainer>
      <Title>Preguntas frecuentes</Title>
      <FAQList>
        {faqData.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader onClick={() => toggleFAQ(index)}>
              <QuestionText>{item.question}</QuestionText>
              <IconWrapper $isOpen={openIndex === index}>
                <ChevronDown size={24} />
              </IconWrapper>
            </AccordionHeader>
            <AccordionContent $isOpen={openIndex === index}>
              <AnswerText>{item.answer}</AnswerText>
            </AccordionContent>
          </AccordionItem>
        ))}
      </FAQList>
    </SectionContainer>
  );
}

export default HowItWorksFAQ;