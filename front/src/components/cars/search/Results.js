import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ResultsContainer from "../ResultsContainer";

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
  const [priceFilter, setPriceFilter] = useState(0);

  useEffect(async () => {
    await fetch(
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
        "&price=" +
        priceFilter +
        "&page=" +
        (currentPage - 1) +
        "&size=" +
        carsPerPage
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setCarsList(data.items);
        setTotalPages(data.totalPages ? data.totalPages : 0);
        setTotalElements(data.totalItems ? data.totalItems : 0);
        setIsUpdating(false);
      })
      .catch((err) => console.log(err));
  }, [isUpdating]);

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
        "&price=" +
        priceFilter +
        "&page=" +
        (currentPage - 1) +
        "&size=" +
        carsPerPage
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setCarsList(data.items);
        setTotalPages(data.totalPages ? data.totalPages : 0);
        setTotalElements(data.totalItems ? data.totalItems : 0);
        setIsUpdating(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = () => {
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
        "&price=" +
        priceFilter +
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
              className="filter-results-input result-input"
              name="keyword"
              onKeyUp={(e) => {
                setBrandFilter(e.target.value);
                handleChange();
              }}
              onKeyDown={(e) => {
                setBrandFilter(e.target.value);
                handleChange();
              }}
            />
          </Col>
          <Col md={2}>
            <input
              type="text"
              id="color-search"
              placeholder="Color"
              name="keyword"
              className="filter-results-input result-input"
              onKeyUp={(e) => {
                setColorFilter(e.target.value);
                handleChange();
              }}
              onKeyDown={(e) => {
                setColorFilter(e.target.value);
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
              className="filter-results-input result-input"
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
              id="combustible-search"
              placeholder="Combustible"
              name="keyword"
              className="filter-results-input result-input"
              onKeyUp={(e) => {
                setCombustibleFilter(e.target.value);
                handleChange();
              }}
              onKeyDown={(e) => {
                setCombustibleFilter(e.target.value);
                handleChange();
              }}
            />
          </Col>
          <Col md={2}>
            <input
              type="text"
              id="body-search"
              placeholder="Body"
              name="keyword"
              className="filter-results-input result-input"
              onKeyUp={(e) => {
                setBodyFilter(e.target.value);
                handleChange();
              }}
              onKeyDown={(e) => {
                setBodyFilter(e.target.value);
                handleChange();
              }}
            />
          </Col>
          <Col md={2}>
            <input
              type="number"
              id="numberDoors-search"
              placeholder="Number doors"
              name="keyword"
              className="filter-results-input result-input"
              onKeyUp={(e) => {
                setNumberDoorsFilter(e.target.value);
                handleChange();
              }}
              onKeyDown={(e) => {
                setNumberDoorsFilter(e.target.value);
                handleChange();
              }}
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
              className="filter-results-input result-input"
              onKeyUp={(e) => {
                setCargoVolumeFilter(e.target.value);
                handleChange();
              }}
              onKeyDown={(e) => {
                setCargoVolumeFilter(e.target.value);
                handleChange();
              }}
            />
          </Col>
          <Col md={2}>
            <input
              type="number"
              id="price-search"
              placeholder="Price"
              name="keyword"
              className="filter-results-input result-input"
              onKeyUp={(e) => {
                setPriceFilter(e.target.value);
                handleChange();
              }}
              onKeyDown={(e) => {
                setPriceFilter(e.target.value);
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
          Autoturisme - {totalElements} anunturi
        </Row>
        <hr className="hr-invisible" />
        <Row>
          {carsList.length !== 0 ? (
            carsList.map((c, index) => <ResultsContainer car={c} key={index} />)
          ) : (
            <h3>No cars documented</h3>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Results;
