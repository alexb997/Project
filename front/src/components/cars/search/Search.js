import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import "./Search.css";
import FiltersCar from "./FiltersCar";
import FiltersPiece from "../../pieces/search/FiltersPiece";

function Search() {
  const [filter, setFilter] = useState(true);
  return (
    <div>
      <Container className="search-cars" fluid>
        <Container>
          <Row>
            <Col sm={5} offset={6}>
              <button className="choices" onClick={() => setFilter(true)}>
                Cars
              </button>
              <button className="choices" onClick={() => setFilter(false)}>
                Pieces
              </button>
            </Col>
          </Row>
          <Row>{filter ? <FiltersCar /> : <FiltersPiece />}</Row>
        </Container>
      </Container>
      <hr className="hr-invisible" />
      <Container>
        <Row>
          <h2>List of cars</h2>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
