import React from "react";
import { skills } from "../utils/constants";

const Skills = () => {
    return (
        <section id="Skills" className="w-full text-center bg-secondary py-10">
            <h1 className="text-4xl">Tech Stack</h1>
            <ul className="flex flex-wrap justify-center items-center">
                {skills.map((skill, index) => (
                    <li className="text-center text-xl w-[32vw] md:w-1/5 h-full my-10" key={index}>
                        <img src={skill.image} alt={`skill ${index}`} className="w-[80px] h-[80px] m-auto mb-5 select-none" />
                        <p>{skill.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
