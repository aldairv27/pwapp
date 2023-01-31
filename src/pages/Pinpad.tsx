import { Col, Row } from "antd";
import PinpadMain from "../components/Pinpad/PinpadMain";

export const Pinpad = () => {
    return (
      <Row style={{width: '100%'}}>
          <Col span={24} style={{width: '100%', height: '10vh', placeContent: 'center', display: 'flex'}}>
            <PinpadMain></PinpadMain>
          </Col>
      </Row>
    );
  };
  