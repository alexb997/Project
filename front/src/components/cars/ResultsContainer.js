import { Container, Row, Col, Button } from "react-bootstrap";

function CarContainer() {
  return (
    <Container className="card-bloc" fluid>
      <Row>
        <Col md={2}>image</Col>
        <Col md={5}>
          <Row>Sean Leon 1.6</Row>
          <hr className="hr-invisible" />
          <Row> Sean Leon in rate</Row>
          <Row>2008 104 000km ...</Row>
        </Col>
        <Col md={1}>
          <Row>Price</Row>
          <Row>
            <Button>Favorite</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CarContainer;
