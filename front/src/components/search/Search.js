import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { GoGear } from "react-icons/go";

import "./Search.css";
import FiltersCar from "../cars/search/FiltersCar";
import FiltersPiece from "../pieces/search/FiltersPiece";

function Search() {
  const [filter, setFilter] = useState(true);
  const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <Container className="search-cars" fluid>
        <Container>
          <Row>
            <Col sm={6} style={{ paddingLeft: 0, paddingRight: 0 }}>
              <button
                className={isActive ? "choices-active" : "choices"}
                onClick={() => {
                  setIsActive(true);
                  setFilter(true);
                }}
              >
                <AiOutlineCar />
                <p>Cars</p>
              </button>
              <button
                className={isActive ? "choices" : "choices-active"}
                onClick={() => {
                  setIsActive(false);
                  setFilter(false);
                }}
              >
                <GoGear />
                <p>Pieces</p>
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
