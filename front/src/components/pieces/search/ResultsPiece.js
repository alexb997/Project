import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PieceContainer from "../PieceContainer";

function ResultsPiece(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [piecesPerPage, setPiecesPerPage] = useState(6);
  const [piecesList, setPiecesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [totalElements, setTotalElements] = useState();
  const [modelFilter, setModelFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [utilityFilter, setUtilityFilter] = useState("");

  useEffect(async () => {
    await fetch(
      "http://localhost:8080/pieces/all"
      //   "http://localhost:8080/pieces/filter?name=" +
      //     nameFilter +
      //     " utility=" +
      //     utilityFilter +
      //     " model=" +
      //     modelFilter +
      //     " type=" +
      //     typeFilter +
      //     "&page=" +
      //     (currentPage - 1) +
      //     "&size=" +
      //     piecesPerPage
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setPiecesList(data.items);
        setTotalPages(data.totalPages ? data.totalPages : 0);
        setTotalElements(data.totalItems ? data.totalItems : 0);
        setIsUpdating(false);
      })
      .catch((err) => console.log(err));
  }, [isUpdating]);

  const handleResetFilters = () => {
    setNameFilter("");
    setTypeFilter("");
    setModelFilter("");
    setUtilityFilter("");
    fetch(
      "http://localhost:8080/pieces/filter?name=" +
        nameFilter +
        " utility=" +
        utilityFilter +
        " model=" +
        modelFilter +
        " type=" +
        typeFilter +
        "&page=" +
        (currentPage - 1) +
        "&size=" +
        piecesPerPage
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setPiecesList(data.items);
        setTotalPages(data.totalPages ? data.totalPages : 0);
        setTotalElements(data.totalItems ? data.totalItems : 0);
        setIsUpdating(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = () => {
    fetch(
      "http://localhost:8080/pieces/filter?name=" +
        nameFilter +
        " utility=" +
        utilityFilter +
        " model=" +
        modelFilter +
        " type=" +
        typeFilter +
        "&page=" +
        (currentPage - 1) +
        "&size=" +
        piecesPerPage
    )
      .then((response) => response.json())
      .then((data) => {
        setPiecesList(data.items);
        setTotalPages(data.totalPages ? data.totalPages : 0);
        setTotalElements(data.totalItems ? data.totalItems : 0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container className="filters-results" fluid>
        <hr className="hr-invisible" />
        <hr className="hr-invisible" />
        <Row>
          <Col md={2}>
            <input
              type="text"
              id="name-search"
              placeholder="Name"
              className="filter-results-input"
              name="keyword"
              onKeyUp={(e) => {
                setNameFilter(e.target.value);
                handleChange();
              }}
              onKeyDown={(e) => {
                setNameFilter(e.target.value);
                handleChange();
              }}
            />
          </Col>
          <Col md={2}>
            <input
              type="text"
              id="type-search"
              placeholder="Type"
              name="keyword"
              className="filter-results-input"
              onKeyUp={(e) => {
                setTypeFilter(e.target.value);
                handleChange();
              }}
              onKeyDown={(e) => {
                setTypeFilter(e.target.value);
                handleChange();
              }}
            />
          </Col>
          <Col md={2}>
            <input
              type="text"
              id="model-search"
              placeholder="Model"
              name="keyword"
              className="filter-results-input"
              onKeyUp={(e) => {
                setModelFilter(e.target.value);
                handleChange();
              }}
              onKeyDown={(e) => {
                setModelFilter(e.target.value);
                handleChange();
              }}
            />
          </Col>
          <Col md={2}>
            <input
              type="text"
              id="utility-search"
              placeholder="Utility"
              name="keyword"
              className="filter-results-input"
              onKeyUp={(e) => {
                setUtilityFilter(e.target.value);
                handleChange();
              }}
              onKeyDown={(e) => {
                setUtilityFilter(e.target.value);
                handleChange();
              }}
            />
          </Col>
          <hr className="hr-invisible" />
          <hr className="hr-invisible" />
        </Row>
      </Container>
      <Container fluid>
        {isLoading && <p>Loading...</p>}
        <Row className="justify-content-around">
          Piese - {totalElements} anunturi
        </Row>
        <hr className="hr-invisible" />
        <Row>
          {piecesList.length !== 0 ? (
            piecesList.map((p, index) => (
              <PieceContainer piece={p} key={index} />
            ))
          ) : (
            <h3>No pieces documented</h3>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ResultsPiece;
