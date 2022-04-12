import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./routes/Router";
import { Container } from "react-bootstrap";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <Container className="App" fluid>
      <NavBar />
      <hr className="hr-invisible" />
      <hr className="hr-invisible" />
      <hr className="hr-invisible" />
      <AppRouter />
    </Container>
  );
}

export default App;
