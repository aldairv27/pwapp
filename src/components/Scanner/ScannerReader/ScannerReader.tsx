/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useBarcode } from "next-barcode";

function BarCode({ textobarcode }: any) {
  const { inputRef } = useBarcode({
    value: textobarcode === "" ? "vacio" : textobarcode,
    options: {
      background: "rgba(255, 255, 255, 0)"
    }
  });
  return <img ref={inputRef} />;
}

const ScannerReader = () => {
  const [texto, onChangeTexto] = useState("");
  return (
      <div className='flex items-center '>
      <input
        autoFocus
        type="text"
        value={texto}
        onChange={(e) => onChangeTexto(e.target.value)}
      />
      <BarCode textobarcode={texto} />
    </div>
  );
}

export default ScannerReader;