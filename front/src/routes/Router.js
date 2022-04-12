import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddCar from "../components/cars/add/AddCar";
import Search from "../components/cars/search/Search";
import Authentification from "../components/users/authentification/Authentification";

function AppRouter() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/car/add" element={<AddCar />} />
          {/* <Route path="/car/edit/:id" element={<EditCar />} /> */}
          <Route path="/authentification" element={<Authentification />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default AppRouter;
