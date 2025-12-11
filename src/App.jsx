import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Intro";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
