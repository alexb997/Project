import { React, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = () => {
    //backendCall check login works
  };

  return (
    <Container className="login">
      <Row>
        <h2>Login page</h2>
      </Row>
      <Row>
        <Col>
          <label>Username</label>
        </Col>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type={"username"}
        ></input>
      </Row>
      <Row>
        <Col>
          <label>Password</label>
        </Col>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
        ></input>
      </Row>
      <Row>
        <Col>
          <Button onClick={HandleSubmit()}>Submit</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
