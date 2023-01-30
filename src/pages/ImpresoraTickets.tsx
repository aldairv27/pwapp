import { Col, Row } from "antd";
import TicketPrinter from "../components/ImpresoraTickets/TicketPrinterMain";

export const ImpresoraTickets = () => {
    return (
      <Row style={{width: '100%'}}>
          <Col span={24} style={{width: '100%', height: '10vh', placeContent: 'center', display: 'flex',}}>
            <TicketPrinter/>
          </Col>
      </Row>
    );
  };
  