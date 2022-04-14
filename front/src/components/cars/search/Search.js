import { Container, Row } from "react-bootstrap";

import "./Search.css";
import Filters from "./Filters";

function Search() {
  return (
    <div>
      <Container className="search-cars" fluid>
        <Container>
          <Row>
            <Filters />
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
