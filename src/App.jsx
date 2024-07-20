import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Job from "./pages/Job";
import Companies from "./pages/Companies";
import CompaniesDetail from "./pages/CompaniesDetail";
import JobDetail from "./pages/JobDetail";
import Mainlayout from "./layout/Mainlayout";

const App = () => {
  return (
    <>
      <Mainlayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job" element={<Job />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:name" element={<CompaniesDetail />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Mainlayout>
    </>
  );
};

export default App;
