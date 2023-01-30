import { useState } from 'react';
import { Printer, Raw, Text, render } from 'react-thermal-printer';

const CajaMain = () => {
    const [usb, setUsb] = useState(null);

    const recepit = (
        <Printer type='epson'>
            <Text size={{ width: 2, height: 2 }}>Prueba para Roleplay</Text>
            <Raw data={Uint8Array.from([0x1B,0x70,0x00,0x2E,0x7D])}></Raw>
        </Printer>
    )
    // String.fromCharCode(27)+"p"+String.fromCharCode(0)+".}"

    const abrirCaja = async () => {
         const data = await render(recepit)
        console.log(data)
        await usb.transferOut(1, data);
    }

    const conectarImpresora = async () => {
        if (!usb) {
            const _usb = await navigator.usb.requestDevice({ filters: [] });
            await _usb.open();
            await _usb.selectConfiguration(1);
            console.log(_usb)
            await _usb.claimInterface(0);
            setUsb(_usb)
        }
    }

    return (
        <div className='container mx-auto'>
            <h2 className="text-2xl font-semibold">Cajón de dinero</h2>

            <button
                onClick={conectarImpresora}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                disabled={usb}
            >
                Conectar impresora
            </button>

            <button
                onClick={abrirCaja}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                disabled={!usb}
            >
                Abrir cajón de dinero
            </button>

        </div>
    )
}

export default CajaMain;