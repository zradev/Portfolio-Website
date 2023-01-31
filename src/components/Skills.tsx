import React from "react";
import { skills } from "../utils/constants";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <section id="Skills" className="w-full text-center bg-secondary py-10">
            <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className="text-4xl"
            >
                Tech Stack
            </motion.h1>
            <ul className="flex flex-wrap justify-center items-center">
                {skills.map((skill, index) => (
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-center text-xl w-[32vw] md:w-1/5 h-full my-10"
                        key={index}
                    >
                        <img src={skill.image} alt={`skill ${index}`} className="w-[80px] h-[80px] m-auto mb-5 select-none" />
                        <p>{skill.name}</p>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
