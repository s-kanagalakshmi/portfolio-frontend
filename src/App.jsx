import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Login from "../components/Login";
import Signup from "../components/Signup";
 function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/home" element={<Home/>}/> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />

      </Routes>
    </BrowserRouter>
      
</>
  )
}
export default App