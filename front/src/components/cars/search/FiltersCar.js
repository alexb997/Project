import { Col, Row, Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Navigate, Redirect } from "react-router-dom";

function FiltersCar() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [carsList, setCarsList] = useState([]);
  const [carsPerPage, setCarsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [totalElements, setTotalElements] = useState();
  const [modelFilter, setModelFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [bodyFilter, setBodyFilter] = useState("");
  const [combustibleFilter, setCombustibleFilter] = useState("");
  const [cargoVolumeFilter, setCargoVolumeFilter] = useState(0);
  const [numberDoorsFilter, setNumberDoorsFilter] = useState(0);
  const [priceFilter, setPriceFilter] = useState(0);

  // useEffect(async () => {
  //   await fetch(
  //     "http://localhost:8080/cars/filter?brand=" +
  //       brandFilter +
  //       "&color=" +
  //       colorFilter +
  //       "&body=" +
  //       bodyFilter +
  //       "&combustible=" +
  //       combustibleFilter +
  //       "&cargoVolume=" +
  //       cargoVolumeFilter +
  //       "&model=" +
  //       modelFilter +
  //       "&numberDoors=" +
  //       numberDoorsFilter +
  //       "&price=" +
  //       priceFilter +
  //       "&page=" +
  //       (currentPage - 1) +
  //       "&size=" +
  //       carsPerPage
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setIsLoading(false);
  //       setCarsList(data.items);
  //       setTotalPages(data.totalPages ? data.totalPages : 0);
  //       setTotalElements(data.totalItems ? data.totalItems : 0);
  //       setIsUpdating(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, [isUpdating]);

  const handleSearchBy = () => {
    // fetch(
    //   "http://localhost:8080/cars/filter?brand=" +
    //     brandFilter +
    //     "&color=" +
    //     colorFilter +
    //     "&body=" +
    //     bodyFilter +
    //     "&combustible=" +
    //     combustibleFilter +
    //     "&cargoVolume=" +
    //     cargoVolumeFilter +
    //     "&model=" +
    //     modelFilter +
    //     "&numberDoors=" +
    //     numberDoorsFilter +
    //     "&price=" +
    //     priceFilter +
    //     "&page=" +
    //     (currentPage - 1) +
    //     "&size=" +
    //     carsPerPage
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     return (
    //       <Navigate
    //         to={{
    //           pathname: "/test/new",
    //           state: {
    //             bodyFilter: bodyFilter,
    //             combustibleFilter: combustibleFilter,
    //             modelFilter: modelFilter,
    //             brandFilter: brandFilter,
    //             colorFilter: colorFilter,
    //             cargoVolumeFilter: cargoVolumeFilter,
    //             numberDoorsFilter: numberDoorsFilter,
    //             priceFilter: priceFilter,
    //             data: data,
    //           },
    //         }}
    //       />
    //     );
    //   })
    //   .catch((err) => console.log(err));
  };

  const handleResetFilters = () => {
    setBodyFilter("");
    setCombustibleFilter("");
    setModelFilter("");
    setBrandFilter("");
    setColorFilter("");
    setCargoVolumeFilter(0);
    setNumberDoorsFilter(0);
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
          <span className="filterTag">Brand</span>
          <input
            type="text"
            id="brand-search"
            placeholder="Brand"
            className="input-field result-input"
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
            className="input-field result-input"
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
            className="input-field result-input"
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
            className="input-field result-input"
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
            className="input-field result-input"
            onChange={(e) => setBodyFilter(e.target.value)}
          />
        </Col>
        <Col md={{ span: 1, offset: 5 }}>
          <span className="filterTag">Price</span>
          <input
            type="number"
            id="price-search"
            placeholder="Price"
            className="input-field result-input"
            onChange={(e) => setPriceFilter(e.target.value)}
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
            className="input-field result-input"
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
            className="input-field result-input"
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
  );
}

export default FiltersCar;
