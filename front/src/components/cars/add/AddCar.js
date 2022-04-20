import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Cars.css";

const AddCar = () => {
  const [car, setCar] = useState({});
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [body, setBody] = useState("");
  const [owner, setOwner] = useState("");
  const [combustible, setCombustible] = useState("");
  const [price, setPrice] = useState(0);
  const [cargoVolume, setCargoVolume] = useState(0);
  const [numberDoors, setNumberDoors] = useState(0);

  useEffect(() => {
    setCar({
      model: model,
      brand: brand,
      color: color,
      body: body,
      owner: owner,
      combustible: combustible,
      cargoVolume: cargoVolume,
      numberDoors: numberDoors,
      price: price,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        brand: brand,
        color: color,
        body: body,
        owner: owner,
        combustible: combustible,
        cargoVolume: cargoVolume,
        numberDoors: numberDoors,
        price: price,
      }),
    };
    fetch("http://localhost:8080/cars/add/", requestOptions)
      .then((response) => response.json())
      .then((data) => setCar(data));
  };

  return (
    <Container>
      <Row>
        <h3>Add Car</h3>
      </Row>
      <Row>
        <Col md={8}>
          <form
            className="form-style"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Row>
              <Col md={6}>
                <label className="formTag">Model:</label>
                <input
                  type="text"
                  name="model"
                  className="form-input"
                  placeholder={car.model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <label className="formTag">Price:</label>
                <input
                  type="number"
                  name="price"
                  className="form-input"
                  placeholder={car.price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>
            </Row>
            <hr className="hr-invisible" />
            <Row>
              <Col md={6}>
                <label className="formTag">Color:</label>
                <input
                  className="form-input"
                  type="text"
                  name="color"
                  placeholder={car.color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <label className="formTag">Brand:</label>
                <input
                  className="form-input"
                  type="text"
                  name="brand"
                  placeholder={car.brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Col>
            </Row>
            <hr className="hr-invisible" />
            <Row>
              <Col md={6}>
                <label className="formTag">Body:</label>
                <input
                  className="form-input"
                  type="text"
                  name="body"
                  placeholder={car.body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <label className="formTag">Owner:</label>
                <input
                  className="form-input"
                  type="text"
                  name="owner"
                  placeholder={car.owner}
                  onChange={(e) => setOwner(e.target.value)}
                />
              </Col>
            </Row>
            <hr className="hr-invisible" />
            <Row>
              <Col md={6}>
                <label className="formTag">Combustible:</label>
                <input
                  className="form-input"
                  type="text"
                  name="combustible"
                  placeholder={car.combustible}
                  onChange={(e) => setCombustible(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <label className="formTag">Doors:</label>
                <input
                  className="form-input"
                  type="number"
                  name="numberDoors"
                  placeholder={car.numberDoors}
                  onChange={(e) => setNumberDoors(e.target.value)}
                />
              </Col>
            </Row>
            <hr className="hr-invisible" />
            <Row>
              <Col md={6}>
                <label className="formTag">Volume:</label>
                <input
                  className="form-input"
                  type="number"
                  name="cargoVolume"
                  placeholder={car.cargoVolume}
                  onChange={(e) => setCargoVolume(e.target.value)}
                />
              </Col>
            </Row>
            <hr className="hr-invisible" />
            <Button variant="primary" type="submit">
              Save Car
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCar;
