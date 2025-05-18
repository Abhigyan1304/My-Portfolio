// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import Aboutpage from "./Pages/About/Aboutpage";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <Router>
      <Navbar /> {/* This stays on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
