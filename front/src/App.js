import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./routes/Router";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    var username = sessionStorage.getItem("username");
    if (username == null) {
      username = "";
    }
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("favourites", []);
  }, []);
  return (
    <div className="App">
      <NavBar />
      <hr className="hr-invisible" />
      <hr className="hr-invisible" />
      <hr className="hr-invisible" />
      <AppRouter />
      <hr className="hr-invisible" />
      <Footer />
    </div>
  );
}

export default App;
