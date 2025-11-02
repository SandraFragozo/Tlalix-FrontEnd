import React from 'react';
import styled from 'styled-components';
import Footer from '@/components/Footer';

const PageContainer = styled.div`
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

// Estilos de contenido para texto legal
const Content = styled.div`
  background-color: var(--color-azul-mar);
  border: 1px solid var(--color-celeste);
  border-radius: 12px;
  padding: 2.5rem 3rem;
  width: 100%;
  max-width: 800px;
  
  p, li {
    font-family: var(--fuente-texto); /* Caudex */
    color: var(--color-blanco);
    opacity: 0.85;
    line-height: 1.7;
    font-size: 1.1rem;
  }

  h3 {
    font-family: var(--fuente-subtitulos); /* Forum */
    color: var(--color-celeste);
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  ul {
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }

  /* Para la primera 'p' (versión) */
  p:first-of-type {
    font-style: italic;
    opacity: 0.6;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

function Terminos() {
  return (
    <>
      <PageContainer>
        <Title>TÉRMINOS Y CONDICIONES DE USO</Title>
        <Content>
          <p>Versión: 1.0 — Última actualización: 2025</p>

          <h3>1. Aceptación de los términos</h3>
          <p>
            Al acceder, utilizar o interactuar con la plataforma Tlalix, el usuario declara haber leído, comprendido y aceptado los presentes Términos y Condiciones. Si no está de acuerdo, debe abstenerse de usar el servicio.
          </p>

          <h3>2. Naturaleza del Servicio</h3>
          <p>
            Tlalix es una plataforma tecnológica que facilita el envío, recepción y retiro de remesas mediante stablecoins sobre tecnología blockchain (Scroll zkEVM).
            Tlalix no es un banco, institución financiera, casa de cambio, sociedad cooperativa, entidad de ahorro, transmisor de dinero regulado ni proveedor de custodia bancaria.
            El usuario mantiene control absoluto sobre sus fondos durante todo el proceso.
          </p>

          <h3>3. Requisitos de uso</h3>
          <p>Para utilizar el servicio, el usuario declara que:</p>
          <ul>
            <li>Tiene al menos 18 años</li>
            <li>Utiliza el servicio para fines legales</li>
            <li>Es titular de la cuenta o wallet utilizada</li>
            <li>No se encuentra sujeto a sanciones internacionales o listas restrictivas</li>
          </ul>
          <p>
            Tlalix se reserva el derecho de solicitar verificación de identidad (KYC) si la normativa local lo exige.
          </p>

          <h3>4. Sobre las transacciones</h3>
          <p>
            Las transacciones en blockchain son irreversibles.
            Tlalix no puede modificar, cancelar, recuperar o revertir una operación una vez ejecutada.
            El usuario es responsable de asegurar que los datos ingresados (monto, destinatario, comercio, wallet, etc.) sean correctos.
          </p>

          <h3>5. Comisiones</h3>
          <p>Las comisiones aplicables son:</p>
          <ul>
            <li>1.5% por envío de remesa</li>
            <li>0.5% de incentivo a los comercios que realizan retiros en efectivo</li>
            <li>Tarifas variables de red (gas fees), determinadas por la blockchain utilizada</li>
          </ul>
          <p>Las comisiones serán mostradas antes de confirmar cualquier transacción.</p>

          <h3>6. Comercios Afiliados</h3>
          <p>
            Los comercios que permiten el retiro de efectivo no son empleados de Tlalix.
            Actúan como participantes independientes.
            Tlalix no responde por:
          </p>
          <ul>
            <li>Disponibilidad de efectivo en cada punto</li>
            <li>Horarios de atención</li>
            <li>Trato o atención brindada por el comercio</li>
          </ul>

          <h3>7. Estabilidad del valor (Stablecoins)</h3>
          <p>
            Tlalix utiliza USDC y/o DAI para transferencias.
            Aunque estas stablecoins buscan mantener paridad con USD, su estabilidad depende de sus emisores y mecanismos de respaldo.
            Tlalix no garantiza el valor futuro de ningún activo digital.
          </p>

          <h3>8. Seguridad del usuario</h3>
          <p>El usuario es responsable de:</p>
          <ul>
            <li>Mantener el control de su dispositivo y número telefónico</li>
            <li>No compartir códigos QR, enlaces o información privada</li>
            <li>Proteger claves privadas si utiliza wallets auto-custodiadas</li>
          </ul>
          <p>Tlalix nunca solicitará contraseñas, llaves privadas ni frases semilla.</p>

          <h3>9. Uso indebido</h3>
          <p>Se prohíbe utilizar Tlalix para:</p>
          <ul>
            <li>Lavado de dinero</li>
            <li>Fraude</li>
            <li>Actividades ilícitas o vinculadas a delitos financieros</li>
            <li>Envíos impersonales sin consentimiento del destinatario</li>
          </ul>
          <p>Tlalix podrá colaborar con autoridades ante sospechas fundadas de actividad ilegal.</p>

          <h3>10. Limitación de Responsabilidad</h3>
          <p>
            Tlalix no será responsable por:
          </p>
          <ul>
            <li>Errores en datos ingresados por el usuario</li>
            <li>Fallas de conectividad o servicios de terceros</li>
            <li>Fluctuaciones de mercado vinculadas a stablecoins</li>
            <li>Robo o pérdida del dispositivo del usuario</li>
            <li>Actos de fuerza mayor</li>
          </ul>
          <p>
            La responsabilidad máxima de Tlalix se limita al monto de la comisión cobrada en la transacción afectada.
          </p>

          <h3>11. Modificaciones</h3>
          <p>
            Tlalix podrá actualizar estos términos en cualquier momento. Los cambios serán publicados en la plataforma y su uso continuo implica aceptación.
          </p>
          
          <h3>12. Ley Aplicable</h3>
          <p>
            Estos términos se rigen por la legislación del país donde el servicio se encuentre operando.
            La resolución de conflictos se hará mediante mecanismos de conciliación o arbitraje, antes de recurrir a tribunales.
          </p>
        </Content>
      </PageContainer>
      <Footer />
    </>
  );
}

export default Terminos;