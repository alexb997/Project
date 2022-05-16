import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

import "../Users.css";
import Register from "./register/Register";
import Login from "./login/Login";

function Authentification() {
  const [login, setLogin] = useState(true);

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <button className="choices" onClick={() => setLogin(true)}>
            Login
          </button>
          <button className="choices" onClick={() => setLogin(false)}>
            Register
          </button>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>{login ? <Login /> : <Register />}</Col>
      </Row>
    </Container>
  );
}

export default Authentification;
