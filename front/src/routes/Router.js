import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddCar from "../components/cars/add/AddCar";
import EditCar from "../components/cars/edit/EditCar";
import Results from "../components/cars/search/Results";
import Search from "../components/cars/search/Search";
import Authentification from "../components/users/authentification/Authentification";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/car/add" element={<AddCar />} />
        <Route path="/car/edit/:id" element={<EditCar />} />
        <Route path="/cars/filtered" element={<Results />} />
        <Route path="/authentification" element={<Authentification />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
