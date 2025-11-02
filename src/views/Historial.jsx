import React, { useState } from 'react';
import styled from 'styled-components';
import { Filter } from 'lucide-react';
import Footer from '@/components/Footer'; // <-- 1. IMPORTA EL FOOTER

// ... (tus datos hardcodeados: mockData y filtros)
const mockData = [
  { id: 1, fecha: "28/10/2025", dest: "maria.eth", usd: "100.00", mxn: "1732.50", com: "1.50", status: "Retirada" },
  { id: 2, fecha: "25/10/2025", dest: "jose@email.com", usd: "250.00", mxn: "4331.25", com: "3.75", status: "Confirmada" },
  { id: 3, fecha: "20/10/2025", dest: "ana.eth", usd: "50.00", mxn: "866.25", com: "0.75", status: "Pendiente" },
  { id: 4, fecha: "15/10/2025", dest: "pedro@email.com", usd: "300.00", mxn: "5197.50", com: "4.50", status: "Fallida" },
];
const filtros = ["Todas", "Confirmadas", "Retiradas", "Pendiente", "Fallida"];


// ... (todos tus styled-components: HistorialContainer, Title, TransactionsContainer, Table, etc...)
const HistorialContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 2rem; 
  width: 100%;
  align-items: center; 
`;
const Title = styled.h1`
  font-family: var(--fuente-titulos);
  color: var(--color-blanco);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;
const TransactionsContainer = styled.div`
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(14, 150, 174, 0.1);
  max-width: 1000px;
  width: 100%; 
`;
const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;
const SubTitle = styled.h2`
  font-family: var(--fuente-titulos);
  color: var(--color-blanco);
  font-size: 1.75rem;
  margin: 0;
`;
const FilterContainer = styled.div`
  position: relative;
  z-index: 10;
`;
const FilterButton = styled.button`
  font-family: var(--fuente-texto);
  background-color: var(--color-azul-marino);
  border: 1px solid var(--color-celeste);
  color: var(--color-blanco);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  width: 120px;
  justify-content: space-between;

  &:hover {
    background-color: var(--color-celeste);
    color: var(--color-azul-marino);
  }
`;
const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  width: 100%;
  background-color: var(--color-azul-marino);
  border: 1px solid var(--color-celeste);
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;
const DropdownItem = styled.button`
  font-family: var(--fuente-texto);
  background: transparent;
  border: none;
  color: var(--color-blanco);
  padding: 0.5rem 1rem;
  width: 100%;
  text-align: left;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-azul-mar);
  }
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
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
  padding: 1rem;
  vertical-align: middle;
`;
const Tr = styled.tr`
  border-bottom: 1px solid var(--color-azul-marino);
  &:last-child { border-bottom: none; }
`;
const getStatusColor = (status) => {
  switch (status) {
    case "Confirmada": return 'var(--color-verde-opaco)';
    case "Pendiente": return 'var(--color-amarillo-opaco)';
    case "Fallida": return 'var(--color-rojizo)';
    case "Retirada": return 'var(--color-celeste)';
    default: return '#888';
  }
};
const StatusBadge = styled.span`
  font-family: var(--fuente-texto);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  background-color: ${({ $status }) => getStatusColor($status)};
  color: var(--color-blanco);
  ${({ $status }) => ($status === "Pendiente" || $status === "Retirada") && `
    color: var(--color-azul-marino);
  `}
`;


// --- El Componente ---

function Historial() {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filtroActual, setFiltroActual] = useState("Todas");

  const handleSelectFilter = (filtro) => {
    setFiltroActual(filtro);
    setIsDropdownOpen(false);
  };

  return (
    // 2. Usa un Fragment (<>)
    <>
      <HistorialContainer>
        <Title>Historial de transacciones</Title>
        
        <TransactionsContainer>
          <TableHeader>
            <SubTitle>Transacciones</SubTitle>
            
            <FilterContainer>
              <FilterButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <Filter size={16} />
                {filtroActual}
              </FilterButton>

              {isDropdownOpen && (
                <DropdownMenu>
                  {filtros.map((filtro) => (
                    <DropdownItem 
                      key={filtro} 
                      onClick={() => handleSelectFilter(filtro)}
                    >
                      {filtro}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </FilterContainer>

          </TableHeader>

          <Table>
            <thead>
              <tr>
                <Th>Fecha</Th>
                <Th>Destinatario</Th>
                <Th>USD</Th>
                <Th>MXN</Th>
                <Th>Comisión</Th>
                <Th>Estado</Th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((tx) => (
                <Tr key={tx.id}>
                  <Td>{tx.fecha}</Td>
                  <Td>{tx.dest}</Td>
                  <Td>${tx.usd}</Td>
                  <Td>${tx.mxn}</Td>
                  <Td>${tx.com}</Td>
                  <Td>
                    <StatusBadge $status={tx.status}>
                      {tx.status}
                    </StatusBadge>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TransactionsContainer>
      </HistorialContainer>

      <Footer /> {/* <-- 3. AÑADE EL FOOTER AL FINAL */}
    </>
  );
}

export default Historial;