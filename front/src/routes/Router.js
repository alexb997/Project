import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "../components/cars/search/Search";

import Home from "../components/home/Home";
import Failure from "../components/users/login/Failure";
import Login from "../components/users/login/Login";
import Success from "../components/users/login/Success";

function AppRouter() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/failure" element={<Failure />} />
          <Route path="/login/success" element={<Success />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default AppRouter;
