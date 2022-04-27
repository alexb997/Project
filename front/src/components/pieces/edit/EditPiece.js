import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditPiece = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [piece, setPiece] = useState({});
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [utility, setUtility] = useState("");
  const [owner, setOwner] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/pieces/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPiece(data);
        setIsLoading(false);
        setModel(piece.model);
        setName(piece.brand);
        setUtility(piece.color);
        setType(piece.body);
        setPrice(piece.price);
        setOwner(piece.owner);
      })
      .catch((err) => console.log(err));
  }, [isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        name: name,
        utility: utility,
        type: type,
        owner: owner,
        price: price,
      }),
    };
    fetch("http://localhost:8080/pieces/edit/" + id, requestOptions)
      .then((response) => response.json())
      .then((data) => setPiece(data));
  };

  return (
    <Container>
      <Row>
        <h3>Edit piece by id: {piece.id}</h3>
      </Row>
      <Row>
        {isLoading && <p>Loading...</p>}
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
                  placeholder={piece.model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <label className="formTag">Price:</label>
                <input
                  type="number"
                  name="price"
                  className="form-input"
                  placeholder={piece.price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>
            </Row>
            <hr className="hr-invisible" />
            <Row>
              <Col md={6}>
                <label className="formTag">Utility:</label>
                <input
                  className="form-input"
                  type="text"
                  name="utility"
                  placeholder={piece.utility}
                  onChange={(e) => setUtility(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <label className="formTag">type:</label>
                <input
                  className="form-input"
                  type="text"
                  name="type"
                  placeholder={piece.type}
                  onChange={(e) => setType(e.target.value)}
                />
              </Col>
            </Row>
            <hr className="hr-invisible" />
            <Row>
              <Col md={6}>
                <label className="formTag">Name:</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder={piece.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <label className="formTag">Owner:</label>
                <input
                  className="form-input"
                  type="text"
                  name="owner"
                  placeholder={piece.owner}
                  onChange={(e) => setOwner(e.target.value)}
                />
              </Col>
            </Row>
            <hr className="hr-invisible" />
            <Button variant="primary" type="submit">
              Save edit
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditPiece;
