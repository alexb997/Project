import { Container, Row, Col } from "react-bootstrap";

import "./Search.css";
import FiltersCar from "./FiltersCar";

function Search() {
  return (
    <div>
      <Container className="search-cars" fluid>
        <Container>
          <Row>
            <Col>Option1</Col>
            <Col>Option2</Col>
          </Row>
          <Row>
            <FiltersCar />
          </Row>
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
