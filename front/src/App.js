import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./routes/Router";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="App" fluid>
      <AppRouter />
    </Container>
  );
}

export default App;
