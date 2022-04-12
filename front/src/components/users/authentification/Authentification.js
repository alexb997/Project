import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

import "../Users.css";
import Register from "./register/Register";
import Login from "./login/Login";

function Authentification() {
  const [login, setLogin] = useState(true);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={5} offset={6}>
          <button className="choices" onClick={() => setLogin(true)}>
            Login
          </button>
          <button className="choices" onClick={() => setLogin(false)}>
            Register
          </button>
        </Col>
      </Row>
      {login ? <Login /> : <Register />}
    </Container>
  );
}

export default Authentification;
