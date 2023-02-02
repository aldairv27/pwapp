/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Button, message } from 'antd';
import ReactToPrint from 'react-to-print';
import Ticket from './Ticket/Ticket';


const TicketPrinter = () => {
  const [_, contextHolder] = message.useMessage();
  const componentRef = useRef();

  const pageStyle = `
      @page: {
        size: 100%;
      }
      @media all {
        .page-break {
          display: none;
        }
      }
      @media print {
        .page-break {
          margin-top: 1rem;
          display: block;
          page-break-before: auto;
        }
      }
    `;

  return (
    <div className='container mx-auto' style={{marginLeft: '25px'}}>
      {contextHolder}
      <h1 className='text-2xl mt-10 m-4'>
        Al presionar el boton situado en la parte inferior se mandará a imprimir una hoja de pruebas a la impresora de tickets.
      </h1>
      <Ticket ref={componentRef} className='mt-5 m-4'/>
      <ReactToPrint
        trigger={() =>
          <Button className='oculto-impresion mt-5 m-4'
            onClick={() => message.loading('Preparando impresión', 2.5)}
            style={{backgroundColor: 'gray'}}
          >
            Presiona para mandar la prueba a impresion
          </Button>}
        content={() => componentRef.current}
        pageStyle={pageStyle}
        onAfterPrint={() => message.success('Impresión lista', 2.5)}
        onPrintError={() => message.error('Error al imprimir', 2.5)}
      />
    </div>
  );
};

export default TicketPrinter;