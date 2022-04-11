import { useEffect, useState } from "react";

function Register() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUser({
      username: username,
      password: password,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    fetch("http://localhost:8080/users/add", requestOptions)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  const usernameChange = (e) => {
    setUsername(e);
    setUser({
      username: username,
    });
  };
  const passwordChange = (e) => {
    setPassword(e);
    setUser({
      password: password,
    });
  };

  return (
    <div>
      <h3>Input form</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder={user.username}
            onKeyUp={(e) => usernameChange(e.target.value)}
            onKeyDown={(e) => usernameChange(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder={user.password}
            onKeyUp={(e) => passwordChange(e.target.value)}
            onKeyDown={(e) => passwordChange(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <hr className="hr-invisible" />
    </div>
  );
}

export default Register;
