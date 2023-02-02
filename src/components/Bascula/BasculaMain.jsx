/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

const BasculaMain = () => {

    const [port, setPort] = useState(null);
    const [read, setRead] = useState(false);
    let reader = null;
    const [peso, setPeso] = useState([]);

    const readUntilClosed = async (read) => {
        let dec = new TextDecoder();

        while (port && port.readable && read) {
            reader = port.readable.getReader()
            try {
                while (true) {
                    const { value, done } = await reader.read();
                    if (done) {
                        break;
                    }
                    let valueString = (dec.decode(value)).replace(/[a-zA-Z]/g, '').trim();
                    if (valueString) {
                        setPeso(prev => [...prev, valueString + " kg"])
                    }
                }
            } catch (error) {
                console.log("Error", error)
            } finally {
                reader.releaseLock();
                await port.close();
            }
        }
    }

    useEffect(() => {
        if (read) {
            readUntilClosed(read);
        }
    }, [read])

    const connectClick = async () => {
        try {
            const portRequest = await navigator.serial.requestPort();
            await portRequest.open({ baudRate: 9600, dataBits: 8, parity: "none", stopBits: 1 });
            setPort(portRequest);
            setRead(true);
        } catch (error) {
            console.log(error);
        }
    }

    const stopReadClick = async () => {
        if(reader){
            reader.cancel();
        }
        setRead(false);
    }

    return (
        <div className="container m-8">
            <h2 className="text-2xl font-semibold mb-6">Báscula</h2>
            <div className="grid grid-cols-2">
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => { connectClick(); }}
                    disabled={read}
                >
                    Conectar báscula
                </button>
                <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={stopReadClick}
                    disabled={!read}
                >
                    Desconectar báscula
                </button>
            </div>
            <div className="block mx-auto p-6 border-8 border-red-400 rounded-lg  ">
                <h2 className='text-center text-lg'>Lectura</h2>
                {
                    peso.map((p, index) => <p key={index}>{p}</p>)
                }
            </div>
        </div>
    )
}

export default BasculaMain;