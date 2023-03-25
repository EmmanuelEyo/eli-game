import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { SliderData } from "./components/SliderData";
import { CharacterData } from "./components/CharacterData";
import { Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import About from "./components/About";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home slides={SliderData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/characters"
          element={<Characters slides={CharacterData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
