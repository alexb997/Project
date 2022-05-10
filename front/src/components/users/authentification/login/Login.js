import { React, useState } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Login({ setToken }) {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const HandleSubmit = () => {
  //   console.log("called submit handler");
  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   fetch(
  //     "http://localhost:8080/users/login/?username=" +
  //       username +
  //       "&password=" +
  //       password,
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUser(data);
  //       // if(user){
  //       // }else{
  //       // }
  //     });
  // };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  async function loginUser(credentials) {
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
        if (user) {
          return username;
        } else {
          return null;
        }
      });
    // .then((data) => {
    //   setUser(data);
    //   // if(user){
    //   // }else{
    //   // }
    // });
  }

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
          className="form-input"
          type="text"
          name="username"
          placeholder={user.username}
          onKeyUp={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => setUsername(e.target.value)}
        />
        <hr className="hr-invisible" />
        <label>Password:</label>
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder={user.password}
          onKeyUp={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => setPassword(e.target.value)}
        />
        <hr className="hr-invisible" />
        <input className="input-submit" type="submit" value="Submit" />
      </form>
    </Container>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
