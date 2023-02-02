import React, { useState } from 'react'

const LabelPrinter = () => {
  const [usb, setUsb] = useState(null);

  const imprimirEtiqueta = async () => {
    console.log("Imprimir")
    if (!usb) {
      return;
    }
    const data = `
      CITRIX: \n
      ^XA \n
      ^FWN \n
      ^FT110,20,^AP,33,45^FD1394000^FS \n
      ^XZ
    `
    mandarData(stringToUInt8Array(data));
  }

  const stringToUInt8Array = (str) => {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }

  const mandarData = async (data) => {
    console.log(data)
    const out = await usb.transferOut(2, data);
    console.log(out);
  }

  const conectarImpresora = async () => {
    const _usb = await navigator.usb.requestDevice({ filters: [] });
    await _usb.open();
    await _usb.selectConfiguration(1);
    console.log(_usb)
    await _usb.claimInterface(0);
    setUsb(_usb)
  }

  const cerrarConexion = () => {
    if(usb){
      usb.close();
    }
    setUsb(null);
  }

  return (

    <div className='container m-8'>
      <h2 className="text-2xl font-semibold mb-4">Impresora de etiquetas</h2>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={conectarImpresora}
        disabled={usb}
      >
        Conectar impresora
      </button>
      <button
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={imprimirEtiqueta}
        disabled={!usb}
      >
        Imprimir etiqueta
      </button>
      <button
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={cerrarConexion}
        disabled={!usb}
      >
        Cerrar conexión
      </button>
    </div>
  )
}

export default LabelPrinter;