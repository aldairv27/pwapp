import React from "react";
import { Col, Row} from 'antd';
const QrReader = require('modern-react-qr-reader');

class QrScanner extends React.Component {
  state = {
    delay: 100,
    result: "Escanea un codigo QR"
  };

  handleScan = (data:any) => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };

  handleError = (err:any) => {
    console.error(err);
  };

  render() {
    return (
      <Row>
        <Col className='flex items-center justify-items-center'>
          <QrReader
            delay={300}
            facingMode={"environment"}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "15em" }}
          />
        </Col>
        <Col className='flex items-center justify-items-center m-4'>
          <h1 className="self-center text-4xl font-bold whitespace-nowrap dark:text-white ">
            <a href={this.state.result}>{this.state.result}</a>
          </h1>
        </Col>
      </Row>
    );
  }
}
export default QrScanner;