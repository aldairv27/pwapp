import { Col, Row } from "antd";
import BasculaMain from "../components/Bascula/BasculaMain";

export const Bascula = () => {
    return (
      <Row style={{width: '100%'}}>
          <Col span={24} style={{width: '100%', height: '10vh', placeContent: 'center', display: 'flex',}}>
            <BasculaMain/>
          </Col>
      </Row>
    );
  };
  