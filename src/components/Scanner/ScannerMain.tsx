import React, { useState, Fragment, useEffect } from 'react';
import { Col, Row, Button } from 'antd';
import { ScanOutlined, QrcodeOutlined } from '@ant-design/icons';
import ScannerReader from './ScannerReader/ScannerReader';
import QrScanner from './QrScanner/QrScanner';;


const ScannerMain = () => {
    const [scann, setScann] = useState(false);
    const [qrScann, setQrScann] = useState(false);

    useEffect(() => {
        if (scann === true) setQrScann(!scann)
    }, [scann])

    useEffect(() => {
        if (qrScann === true) setScann(!qrScann)
    }, [qrScann])

    return (
        <Fragment>
            <div className="container mx-auto">
                <Row className="m-4 text-2xl"><h2>CODE-BAR READER</h2></Row>
                <Row className="m-4"><h5>Utilizando el scanner de codigo de barras haz click en el boton y scanea un codigo de barras</h5></Row>

                <Row className='flex items-center'>
                    <Col className="items-center m-4 w-1/5">
                        <Row>
                            <Button
                                icon={<ScanOutlined />}
                                className="bg-gray-100 rounded mt-4 border-2 border-gray-200 font-sans items-center flex"
                                onClick={() => { setScann(!scann) }}>
                                {scann ? 'Stop' : 'Scann Now'}
                            </Button>
                        </Row>

                        <Row>
                            <Button
                                icon={<QrcodeOutlined />}
                                className="bg-gray-100 rounded mt-4 border-2 border-gray-200 font-sans items-center flex"
                                onClick={() => { setQrScann(!qrScann) }}>
                                {qrScann ? 'Stop' : 'Scann QR Now'}
                            </Button>
                        </Row>
                    </Col>
                    <Col className="items-center m-4">
                        <Row>
                            {scann ? <ScannerReader /> : qrScann ? <QrScanner /> : <>Selecciona una funcion</>}
                        </Row>
                    </Col>
                </Row>
            </div>

        </Fragment>
    );
};

export default ScannerMain;