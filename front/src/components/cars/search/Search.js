import { useEffect, useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";

import "./Search.css";
import CarContainer from "../CarContainer";

function Search() {
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

  const handleSearchBy = () => {
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
    <div className="search-cars">
      {isLoading && <p>Loading...</p>}
      <Container className="list-zone" fluid>
        <Row>
          <Col md={5} className="filters-zone">
            <Row>
              <hr className="hr-invisible" />
              <Col>
                <Button className="reset-button resetFiltersTag">
                  Reset filters
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={1}>
                <span className="filterTag">Brand</span>
                <input
                  type="text"
                  id="brand-search"
                  placeholder="Brand"
                  className="filter-input"
                  name="keyword"
                  onChange={(e) => setBrandFilter(e.target.value)}
                />
              </Col>
              <Col md={{ span: 1, offset: 5 }}>
                <span className="filterTag">Color</span>
                <input
                  type="text"
                  id="color-search"
                  placeholder="Color"
                  name="keyword"
                  className="filter-input"
                  onChange={(e) => setColorFilter(e.target.value)}
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
                  className="filter-input"
                  onChange={(e) => setModelFilter(e.target.value)}
                />
              </Col>
              <Col md={{ span: 1, offset: 5 }}>
                <span className="filterTag">Combustible</span>
                <input
                  type="text"
                  id="combustible-search"
                  placeholder="Combustible"
                  name="keyword"
                  className="filter-input"
                  onChange={(e) => setCombustibleFilter(e.target.value)}
                />
              </Col>
              <hr className="hr-invisible" />
            </Row>
            <Row>
              <Col md={1}>
                <span className="filterTag">Body</span>
                <input
                  type="text"
                  id="body-search"
                  placeholder="Body"
                  name="keyword"
                  className="filter-input"
                  onChange={(e) => setBodyFilter(e.target.value)}
                />
              </Col>
              <hr className="hr-invisible" />
            </Row>
            <Row>
              <Col md={1}>
                <span className="filterTag">Doors</span>
                <input
                  type="number"
                  id="numberDoors-search"
                  placeholder="Number doors"
                  name="keyword"
                  className="filter-input"
                  onChange={(e) => setNumberDoorsFilter(e.target.value)}
                />
              </Col>
              <Col md={{ span: 1, offset: 5 }}>
                <span className="filterTag">Volume</span>
                <input
                  type="number"
                  id="cargoVolume-search"
                  placeholder="Cargo volume"
                  name="keyword"
                  className="filter-input"
                  onChange={(e) => setCargoVolumeFilter(e.target.value)}
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
          <Col>
            <Row>
              <h2>Image zone</h2>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Col>
          <Row>
            <p style={{ textAlign: "left" }}>
              {totalElements} matching results
            </p>
            {carsList.length !== 0 ? (
              carsList.map((c, index) => (
                <Col md={3} key={index} className="car-item">
                  <CarContainer car={c} />
                </Col>
              ))
            ) : (
              <h3>No cars documented</h3>
            )}
          </Row>
        </Col>
      </Container>
      <hr className="hr-invisible" />
      <span>
        <Button onClick={() => prevPage()}>Prev..</Button>
        <span>{currentPage}</span>
        <Button onClick={() => nextPage()}>Next..</Button>
        <br />
        Out of {totalPages} pages
      </span>
    </div>
  );
}

export default Search;
