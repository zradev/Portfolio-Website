import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="bg-primary text-white h-[100%] font-playfair ">
            <Nav />
            <Hero />
            <Skills />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
