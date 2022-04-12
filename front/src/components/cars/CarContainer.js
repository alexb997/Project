import { Button } from "bootstrap";
import { Container, Row, Col, Card } from "react-bootstrap";

function CarContainer(props) {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <Card className="card-bloc">
      <Card.Img
        variant="top"
        src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Card.Body>
        <Card.Title>
          <Row>
            {Capitalize(props.car.model)} {Capitalize(props.car.color)}
          </Row>
        </Card.Title>
        <Card.Text>
          <Col className="info-column">
            <Row>Combustible: {Capitalize(props.car.color)}</Row>
            <Row>Body: {Capitalize(props.car.body)}</Row>
            <Row>Number of doors: {props.car.numberDoors}</Row>
            <Row>
              Cargo volume: {props.car.cargoVolume}
              {/*m<sup>3</sup> -- doesn't work as intended*/}
            </Row>
          </Col>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CarContainer;
