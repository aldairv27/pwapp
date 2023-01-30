import { useState } from "react";

const Pinpad = () => {
    const [port, setPort] = useState(null);
    const [reader, setReader] = useState(null);
    const [writer, setWriter] = useState(null);
    const [signals, setSignals] = useState(null);
    const [info, setInfo] = useState(null);

    const connectClick = async () => {
        try {
            const portRequest = await navigator.serial.requestPort();
            await portRequest.open({ baudRate: 9600 });
            const writerRead = portRequest.writable.getWriter();
            const readerRead = portRequest.readable.getReader();
            const SignalsRead = await portRequest.getSignals();
            const infoRead = portRequest.getInfo();
            setWriter(writerRead);
            setReader(readerRead);
            setSignals(SignalsRead);
            setInfo(infoRead);
            setPort(portRequest);
        } catch (error) {
            console.log(error)
        }
    }

    const stopReading = async () => {
        reader.releaseLock();
        writer.releaseLock();
        port.close();
        setWriter(null);
        setReader(null);
        setSignals(null);
        setInfo(null);
        setPort(null);
    }

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-semibold">Pinpad</h2>
            <div className="grid grid-cols-2">
                <button
                    onClick={connectClick}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    disabled={port || reader || writer || signals || info}
                >
                    Conectar terminal
                </button>
                <button
                    onClick={stopReading}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    disabled={!port && !reader && !writer && !signals && !info}
                >
                    Desconectar terminal
                </button>
            </div>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase bg-gray-700 text-white">
                        <tr>
                            <th scope="col" className="py-3 px-6">Propiedad</th>
                            <th scope="col" className="py-3 px-6">Status</th>
                            <th className="py-3 px-6">USB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b bg-gray-800 border-gray-700 text-white">
                            <td className="py-4 px-6">Port</td>
                            <td className="py-4 px-6">
                                {
                                    port
                                        ? <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Conectado</span>
                                        : <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Desconectado</span>
                                }
                            </td>
                            <td className="py-4 px-6 border-l" rowSpan={4}>
                                {
                                    info && info.usbProductId
                                        ? <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Sí</span>
                                        : <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">No</span>
                                }
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-800 border-gray-700 text-white">
                            <td className="py-4 px-6">Writer</td>
                            <td className="py-4 px-6">
                                {
                                    writer
                                        ? <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Conectado</span>
                                        : <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Desconectado</span>
                                }
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-800 border-gray-700 text-white">
                            <td className="py-4 px-6">Reader</td>
                            <td className="py-4 px-6">
                                {
                                    reader
                                        ? <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Conectado</span>
                                        : <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Desconectado</span>
                                }
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-800 border-gray-700 text-white">
                            <td className="py-4 px-6">Signals</td>
                            <td className="py-4 px-6">
                                {
                                    signals
                                        ? <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Conectado</span>
                                        : <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Desconectado</span>
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Pinpad;