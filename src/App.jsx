// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Todos from "./pages/Todos";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* <Route index element={<Home />} />
            <Route path="todos" element={<Todos />} />
            <Route path="about" element={<About />} /> */}
            <Route index element={<Todos />} />
          </Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
