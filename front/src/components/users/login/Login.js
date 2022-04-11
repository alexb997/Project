import { React, useState } from "react";
import { Container } from "react-bootstrap";
import "../Users.css";

function Login() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = () => {
    console.log("called submit handler");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(
      "http://localhost:8080/users/login/?username=" +
        username +
        "&password=" +
        password,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        // if(user){
        // }else{
        // }
      });
  };

  return (
    <Container className="login">
      <h3>Login form</h3>
      <form
        onSubmit={(e) => {
          HandleSubmit(e);
        }}
      >
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder={user.username}
          onKeyUp={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder={user.password}
          onKeyUp={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => setPassword(e.target.value)}
        />
        <hr className="hr-invisible" />
        <input type="submit" value="Submit" />
      </form>
    </Container>
  );
}

export default Login;
