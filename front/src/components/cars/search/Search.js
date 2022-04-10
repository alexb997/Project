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
          <Col xs={6} md={4} className="filters-zone">
            <p style={{ "text-align": "right" }}>
              <small>
                Reset the:{" "}
                <u className="reset-button" onClick={handleResetFilters}>
                  filters
                </u>
              </small>
            </p>
            <h2>Search by:</h2>
            <Row>
              <input
                type="text"
                id="brand-search"
                placeholder="Brand"
                name="keyword"
                onChange={(e) => setBrandFilter(e.target.value)}
              />
              <hr />
            </Row>
            <Row>
              <input
                type="text"
                id="model-search"
                placeholder="Model"
                name="keyword"
                onChange={(e) => setModelFilter(e.target.value)}
              />
              <hr />
            </Row>
            <Row>
              <input
                type="text"
                id="color-search"
                placeholder="Color"
                name="keyword"
                onChange={(e) => setColorFilter(e.target.value)}
              />
              <hr />
            </Row>
            <Row>
              <input
                type="text"
                id="body-search"
                placeholder="Body"
                name="keyword"
                onChange={(e) => setBodyFilter(e.target.value)}
              />
              <hr />
            </Row>
            <Row>
              <input
                type="text"
                id="combustible-search"
                placeholder="Combustible"
                name="keyword"
                onChange={(e) => setCombustibleFilter(e.target.value)}
              />
              <hr />
            </Row>
            <Row>
              <input
                type="number"
                id="numberDoors-search"
                placeholder="Number doors"
                name="keyword"
                onChange={(e) => setNumberDoorsFilter(e.target.value)}
              />
              <hr />
            </Row>
            <Row>
              <input
                type="number"
                id="cargoVolume-search"
                placeholder="Cargo volume"
                name="keyword"
                onChange={(e) => setCargoVolumeFilter(e.target.value)}
              />
              <hr />
            </Row>
            <Row>
              <Button variant="primary" onClick={handleSearchBy}>
                Search
              </Button>
            </Row>
          </Col>
          <Col xs={6} md={8}>
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
        </Row>
      </Container>
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
