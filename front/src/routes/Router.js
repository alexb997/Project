import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import Failure from "../components/users/login/Failure";
import Login from "../components/users/login/Login";
import Success from "../components/users/login/Success";
import Register from "../components/users/register/Register";
import AddCar from "../components/cars/add/AddCar";
import Search from "../components/cars/search/Search";

function AppRouter() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Search />} />
          <Route path="/car/add" element={<AddCar />} />
          {/* <Route path="/car/edit/:id" element={<EditCar />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/login/failure" element={<Failure />} />
          <Route path="/login/success" element={<Success />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default AppRouter;
