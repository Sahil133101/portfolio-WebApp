import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import Project from "./Routes/Project";
import NotFound from "./Routes/NotFound";

export default function App() {
  return (
    <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        {/* Default route for handling unmatched paths */}
        <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
}
