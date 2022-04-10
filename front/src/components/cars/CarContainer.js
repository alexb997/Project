import { Container, Row, Col } from "react-bootstrap";

function CarContainer(props) {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div>
      <Container className="card-bloc">
        <Row>
          <Col>
            <h4>Brand: {Capitalize(props.car.brand)}</h4>
          </Col>
        </Row>
        <Row>
          <Col className="info-column">
            <Row>Model: {Capitalize(props.car.model)}</Row>
            <Row>Color: {Capitalize(props.car.color)}</Row>
            <Row>Combustible: {Capitalize(props.car.color)}</Row>
            <Row>Body: {Capitalize(props.car.body)}</Row>
            <Row>Number of doors: {props.car.numberDoors}</Row>
            <Row>
              Cargo volume: {props.car.cargoVolume}
              {/*m<sup>3</sup> -- doesn't work as intended*/}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CarContainer;
