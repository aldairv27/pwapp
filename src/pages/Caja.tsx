import { Col, Row } from "antd";
import CajaMain from "../components/Caja/CajaMain";

export const Caja = () => {
    return (
      <Row style={{width: '100%'}}>
          <Col span={24} style={{width: '100%', height: '10vh', placeContent: 'center', display: 'flex',}}>
            <CajaMain/>
          </Col>
      </Row>
    );
  };
  