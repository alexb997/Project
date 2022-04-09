import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import Failure from "../components/login/Failure";
import Login from "../components/login/Login";
import Success from "../components/login/Success";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/login/failure" element={<Failure />}/>
        <Route path="/login/success" element={<Success />}/>
      </Routes>
    </Router>
  );
}

export default AppRouter;
