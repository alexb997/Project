import { Row, Col, Card } from "react-bootstrap";

function PieceContainer(props) {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <Card className="card-bloc">
      <Card.Img
        variant="top"
        src="https://media.istockphoto.com/photos/machine-gears-picture-id1256530089?b=1&k=20&m=1256530089&s=170667a&w=0&h=zrKIAuV70LDRX6i6dMvEYT0YhuDr37Fw_njkxuVbmVg="
      />
      <Card.Body>
        <Card.Title>
          <Row>{Capitalize(props.piece.name)}</Row>
        </Card.Title>
        <Card.Text>
          <Col className="info-column">
            <Row>Utility: {Capitalize(props.piece.utility)}</Row>
            <Row>Type: {Capitalize(props.piece.type)}</Row>
            <Row>Model: {Capitalize(props.piece.model)}</Row>
            <Row>Owner: {Capitalize(props.piece.owner)}</Row>
            <Row>Price: {props.piece.price}</Row>
          </Col>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PieceContainer;
