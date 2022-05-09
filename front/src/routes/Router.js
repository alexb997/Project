import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddCar from "../components/cars/add/AddCar";
import EditCar from "../components/cars/edit/EditCar";
import Results from "../components/cars/search/Results";
import Search from "../components/search/Search";
import AddPiece from "../components/pieces/add/AddPiece";
import EditPiece from "../components/pieces/edit/EditPiece";
import Authentification from "../components/users/authentification/Authentification";
import Profile from "../components/users/profile/Profile";
import ResultsPiece from "../components/pieces/search/ResultsPiece";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/car/add" element={<AddCar />} />
        <Route path="/car/edit/:id" element={<EditCar />} />
        <Route path="/cars/filtered" element={<Results />} />
        <Route path="/piece/add" element={<AddPiece />} />
        <Route path="/piece/edit/:id" element={<EditPiece />} />
        <Route path="/pieces" element={<ResultsPiece />} />
        <Route path="/authentification" element={<Authentification />} />
        <Route path="/user/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
