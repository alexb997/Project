import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Results(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [carsList, setCarsList] = useState([]);
  const [carsPerPage, setCarsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [totalElements, setTotalElements] = useState();
  const [isUpdating, setIsUpdating] = useState(false);
  const [modelFilter, setModelFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [bodyFilter, setBodyFilter] = useState("");
  const [combustibleFilter, setCombustibleFilter] = useState("");
  const [cargoVolumeFilter, setCargoVolumeFilter] = useState(0);
  const [numberDoorsFilter, setNumberDoorsFilter] = useState(0);

  const handleResetFilters = () => {
    setBodyFilter("");
    setCombustibleFilter("");
    setModelFilter("");
    setBrandFilter("");
    setColorFilter("");
    setCargoVolumeFilter(0);
    setNumberDoorsFilter(0);
    fetch(
      "http://localhost:8080/cars/filter?brand=" +
        brandFilter +
        "&color=" +
        colorFilter +
        "&body=" +
        bodyFilter +
        "&combustible=" +
        combustibleFilter +
        "&cargoVolume=" +
        cargoVolumeFilter +
        "&model=" +
        modelFilter +
        "&numberDoors=" +
        numberDoorsFilter +
        "&page=" +
        (currentPage - 1) +
        "&size=" +
        carsPerPage
    )
      .then((response) => response.json())
      .then((data) => {
        setCarsList(data.items);
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
              id="brand-search"
              placeholder="Brand"
              className="filter-results-input"
              name="keyword"
              onChange={(e) => setBrandFilter(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <input
              type="text"
              id="color-search"
              placeholder="Color"
              name="keyword"
              className="filter-results-input"
              onChange={(e) => setColorFilter(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <input
              type="text"
              id="model-search"
              placeholder="Model"
              name="keyword"
              className="filter-results-input"
              onChange={(e) => setModelFilter(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <input
              type="text"
              id="combustible-search"
              placeholder="Combustible"
              name="keyword"
              className="filter-results-input"
              onChange={(e) => setCombustibleFilter(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <input
              type="text"
              id="body-search"
              placeholder="Body"
              name="keyword"
              className="filter-results-input"
              onChange={(e) => setBodyFilter(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <input
              type="number"
              id="numberDoors-search"
              placeholder="Number doors"
              name="keyword"
              className="filter-results-input"
              onChange={(e) => setNumberDoorsFilter(e.target.value)}
            />
          </Col>
        </Row>
        <hr className="hr-invisible" />
        <Row>
          <Col md={2}>
            <input
              type="number"
              id="cargoVolume-search"
              placeholder="Cargo volume"
              name="keyword"
              className="filter-results-input"
              onChange={(e) => setCargoVolumeFilter(e.target.value)}
            />
          </Col>
          <hr className="hr-invisible" />
          <hr className="hr-invisible" />
        </Row>
      </Container>
      <Container>
        <Row className="justify-content: {spread-around}">
          Autoturisme - n anunturi
        </Row>
        <hr className="hr-invisible" />
        <Row>
          Lista masini rezultate - trebuie container special, sau poate editez
          originalul
        </Row>
      </Container>
    </div>
  );
}

export default Results;
