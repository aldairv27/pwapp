import { Col, Row } from "antd";
import ScannerMain from "../components/Scanner/ScannerMain";

export const Scanner = () => {
    return (
      <Row style={{width: '100%'}}>
          <Col span={24} style={{width: '100%', height: '10vh', placeContent: 'center', display: 'flex',}}>
            <ScannerMain/>
          </Col>
      </Row>
    );
  };
  