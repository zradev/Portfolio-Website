import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="bg-primary text-white h-[100%] font-playfair">
            <Nav />
            <Hero />
            <Skills />
        </div>
    );
}

export default App;
