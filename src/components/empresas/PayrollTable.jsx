import React from 'react';
import styled from 'styled-components';

// --- Datos Hardcodeados ---
const payrollData = [
  { id: 1, nombre: "Carlos Mendoza", puesto: "Developer", wallet: "carlos.eth", monto: "500.00", status: "Pendiente" },
  { id: 2, nombre: "Laura Sánchez", puesto: "Designer", wallet: "laura@email.com", monto: "450.00", status: "Pendiente" },
  { id: 3, nombre: "Miguel Torres", puesto: "Marketing", wallet: "miguel.eth", monto: "400.00", status: "Pagado" },
  { id: 4, nombre: "Ana Ramírez", puesto: "Sales", wallet: "ana@email.com", monto: "425.00", status: "Pendiente" },
];

// --- Styled Components ---

const Container = styled.section`
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  padding: 2.5rem;
  margin: 4rem 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-family: var(--fuente-titulos);
  color: var(--color-blanco);
  font-size: 2rem;
  margin: 0;
`;

const PayAllContainer = styled.div`
  text-align: right;
`;

const TotalLabel = styled.p`
  font-family: var(--fuente-texto);
  color: var(--color-blanco);
  opacity: 0.8;
  margin: 0;
  font-size: 0.9rem;
`;

const TotalAmount = styled.p`
  font-family: var(--fuente-subtitulos);
  color: var(--color-amarillo-opaco);
  font-size: 2rem;
  font-weight: 700;
  margin: 0.25rem 0 1rem 0;
`;

const PayButton = styled.button`
  font-family: var(--fuente-subtitulos);
  font-size: 1rem;
  font-weight: 700;
  background-color: var(--color-verde-opaco);
  color: var(--color-blanco);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// --- Estilos de la Tabla (Reutilizados de Historial) ---
const Table = styled.table` width: 100%; border-collapse: collapse; `;
const Th = styled.th`
  font-family: var(--fuente-subtitulos);
  font-size: 1rem;
  color: var(--color-blanco);
  opacity: 0.7;
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--color-celeste);
`;
const Td = styled.td`
  font-family: var(--fuente-texto);
  color: var(--color-blanco);
  padding: 1.25rem 1rem;
`;
const Tr = styled.tr`
  border-bottom: 1px solid var(--color-azul-marino);
  &:last-child { border-bottom: none; }
`;

const getStatusColor = (status) => {
  if (status === "Pendiente") return 'var(--color-amarillo-opaco)';
  if (status === "Pagado") return 'var(--color-verde-opaco)';
  return '#888';
};
const StatusBadge = styled.span`
  font-family: var(--fuente-texto);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  background-color: ${({ $status }) => getStatusColor($status)};
  color: var(--color-blanco);
  ${({ $status }) => $status === "Pendiente" && `color: var(--color-azul-marino);`}
`;

// --- El Componente ---

function PayrollTable() {
  return (
    <Container>
      <Header>
        <Title>Nómina del mes</Title>
        <PayAllContainer>
          <TotalLabel>Total pendiente:</TotalLabel>
          <TotalAmount>$1375.00 USD</TotalAmount> {/* Hardcodeado */}
          <PayButton>Pagar a todos</PayButton>
        </PayAllContainer>
      </Header>

      <Table>
        <thead>
          <tr>
            <Th>Nombre</Th>
            <Th>Puesto</Th>
            <Th>Wallet</Th>
            <Th>Monto</Th>
            <Th>Estado</Th>
          </tr>
        </thead>
        <tbody>
          {payrollData.map((emp) => (
            <Tr key={emp.id}>
              <Td>{emp.nombre}</Td>
              <Td>{emp.puesto}</Td>
              <Td>{emp.wallet}</Td>
              <Td>${emp.monto}</Td>
              <Td>
                <StatusBadge $status={emp.status}>
                  {emp.status}
                </StatusBadge>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default PayrollTable;