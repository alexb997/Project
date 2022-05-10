import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import StarBorderOutlined from "@material-ui/icons/StarBorderOutlined";
import StarIcon from "@material-ui/icons/Star";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";

function CarContainer(props) {
  const [fav, setFav] = useState(false);
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const confirmRemoval = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:8080/cars/delete/" + id, requestOptions).then(
      (response) => {
        console.log(response);
      }
    );
  };
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
              <Button
                as={Link}
                to={`/car/edit/${props.car.id}`}
                variant="primary"
              >
                Edit
              </Button>
              <hr className="hr-invsible" />
              <Button
                onClick={() => confirmRemoval(props.car.id)}
                variant="danger"
              >
                Delete
              </Button>
            </Row>
            <hr className="hr-invisible" />
            <hr className="hr-invisible" />
            <Row>
              {fav && (
                <IconButton
                  onClick={() => {
                    setFav(!fav);
                  }}
                  aria-label="delete"
                  color="primary"
                >
                  <StarIcon></StarIcon>
                  <label>Add to Favourites</label>
                </IconButton>
              )}
              {!fav && (
                <IconButton
                  onClick={() => {
                    setFav(!fav);
                  }}
                  aria-label="delete"
                  color="primary"
                >
                  <StarBorderOutlined></StarBorderOutlined>
                  <label>Remove from Favourites</label>
                </IconButton>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <hr className="hr-invisible" />
    </div>
  );
}

export default CarContainer;
