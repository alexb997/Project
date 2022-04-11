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
        <Col sm={1} offset={6}>
          <Button onClick={() => setLogin(true)}>Login</Button>
        </Col>
        <Col sm={1}>
          <Button onClick={() => setLogin(false)}>Register</Button>
        </Col>
      </Row>
      {login ? <Login /> : <Register />}
    </Container>
  );
}

export default Authentification;
