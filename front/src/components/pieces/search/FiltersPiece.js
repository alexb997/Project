import { Col, Row, Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Navigate, Redirect } from "react-router-dom";

function FiltersPiece() {
  const [isLoading, setIsLoading] = useState(true);
  const [piecesList, setPiecesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [totalElements, setTotalElements] = useState();

  useEffect(async () => {
    console.log("Effect");
  }, [isUpdating]);

  const prevPage = () => {
    if (currentPage - 1 < 1) {
      console.log("There's no previous page");
    } else {
      setCurrentPage(currentPage - 1);
      setIsUpdating(true);
    }
  };

  const nextPage = () => {
    if (currentPage + 1 > totalPages) {
      console.log("There's no next page");
    } else {
      setCurrentPage(currentPage + 1);
      setIsUpdating(true);
    }
  };

  const handleResetFilters = () => {};

  return (
    <Col md={6} className="filters-zone">
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
                <label className="formTag">Utility:</label>
                <input
                  className="form-input"
                  type="text"
                  name="utility"
                  placeholder={piece.utility}
                  onChange={(e) => setUtility(e.target.value)}
                />
              </Col>
            </Row>
            <hr className="hr-invisible" />
            <Row>
              <Col md={6}>
                <label className="formTag">Type:</label>
                <input
                  className="form-input"
                  type="text"
                  name="type"
                  placeholder={piece.type}
                  onChange={(e) => setType(e.target.value)}
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
              Save piece
            </Button>
          </form>
        </Col>
      </Row>
      <Row>
        <Container fluid>
          <Button variant="danger" onClick={handleSearchBy}>
            Search
          </Button>
        </Container>
        <hr className="hr-invisible" />
      </Row>
    </Col>
  );
}

export default FiltersPiece;
