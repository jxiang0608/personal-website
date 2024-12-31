import React from "react";
import About from "./About/About.jsx";
import Experience from "./Experience/Experience.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import Projects from "./Projects/Projects.jsx";
import Skills from "./Skills/Skills.jsx";

function App() {

  return(
    <>
      <NavBar />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}

export default App
