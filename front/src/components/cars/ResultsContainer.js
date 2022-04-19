import { Container, Row, Col, Button } from "react-bootstrap";

function CarContainer(props) {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div>
      <Container className="card-bloc" fluid>
        <Row>
          <Col md={3}>
            <img
              className="image-fit"
              src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </Col>
          <Col md={6}>
            <Row>
              Model:{Capitalize(props.car.model)} Color:
              {Capitalize(props.car.color)}
            </Row>
            <hr className="hr-invisible" />
            <Row>Body:{Capitalize(props.car.body)}</Row>
            <Row>Combustible: {Capitalize(props.car.combustible)} </Row>
            <Row>Doors:{props.car.numberDoors}</Row>
            <Row>CargoVolume: {props.car.cargoVolume}</Row>
          </Col>
          <Col md={2}>
            <Row>Price: {props.car.price}</Row>
            <Row>
              <Button>Favorite</Button>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr className="hr-invisible" />
    </div>
  );
}

export default CarContainer;
