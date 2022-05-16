import { Col, Row, Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Navigate, Redirect } from "react-router-dom";

function FiltersPiece() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [piecesList, setPiecesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [totalElements, setTotalElements] = useState();
  const [modelFilter, setModelFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [utilityFilter, setUtilityFilter] = useState("");
  const [ownerFilter, setOwnerFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState(0);

  const handleSearchBy = () => {
    console.log(
      "Searched pieces by: Name=" +
        nameFilter +
        " Type=" +
        typeFilter +
        " Utility=" +
        utilityFilter +
        " Model=" +
        modelFilter +
        " Owner=" +
        ownerFilter +
        " Price=" +
        priceFilter
    );
  };

  const handleResetFilters = () => {
    setNameFilter("");
    setTypeFilter("");
    setModelFilter("");
    setUtilityFilter("");
    setOwnerFilter("");
    setPriceFilter(0);
  };

  return (
    <Col md={6} className="filters-zone">
      <Row>
        <hr className="hr-invisible" />
        <Col>
          <Button
            onClick={handleResetFilters}
            className="reset-button resetFiltersTag"
          >
            Reset filters
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={1}>
          <span className="filterTag">Name:</span>
          <input
            type="text"
            id="name-search"
            placeholder="Name"
            className="input-field"
            name="keyword"
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </Col>
        <Col md={{ span: 1, offset: 5 }}>
          <span className="filterTag">Type:</span>
          <input
            type="text"
            id="type-search"
            placeholder="Type"
            name="keyword"
            className="input-field"
            onChange={(e) => setTypeFilter(e.target.value)}
          />
        </Col>
        <hr className="hr-invisible" />
      </Row>
      <Row>
        <Col md={1}>
          <span className="filterTag">Model</span>
          <input
            type="text"
            id="model-search"
            placeholder="Model"
            name="keyword"
            className="input-field"
            onChange={(e) => setModelFilter(e.target.value)}
          />
        </Col>
        <Col md={{ span: 1, offset: 5 }}>
          <span className="filterTag">Utility:</span>
          <input
            type="text"
            id="utility-search"
            placeholder="Utility"
            name="keyword"
            className="input-field"
            onChange={(e) => setUtilityFilter(e.target.value)}
          />
        </Col>
        <hr className="hr-invisible" />
      </Row>
      <Row>
        <Col md={1}>
          <span className="filterTag">Owner:</span>
          <input
            type="text"
            id="owner-search"
            placeholder="Owner"
            className="input-field"
            name="keyword"
            onChange={(e) => setOwnerFilter(e.target.value)}
          />
        </Col>
        <Col md={{ span: 1, offset: 5 }}>
          <span className="filterTag">Price</span>
          <input
            type="number"
            id="price-search"
            placeholder="Price"
            className="input-field"
            onChange={(e) => setPriceFilter(e.target.value)}
          />
        </Col>
        <hr className="hr-invisible" />
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
