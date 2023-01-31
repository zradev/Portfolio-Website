import React from "react";
import { projects } from "../utils/constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section id="Projects" className="bg-secondary py-10">
            <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="text-4xl text-center mb-14"
            >
                Projects
            </motion.h1>
            <ul className="flex flex-col md:flex-row px-10 gap-20">
                {projects.map((project, index) => (
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        key={index}
                        className="flex flex-col justify-between text-center w-full md:w-[33vw]"
                    >
                        <h1 className="mb-auto text-2xl">{project.name}</h1>
                        <a href={project.url}>
                            <img
                                src={project.mainImage}
                                alt="project"
                                className="rounded-xl md:w-[30vw] m-auto my-10 select-none hover:cursor-pointer"
                                onMouseOver={(e) => (e.currentTarget.src = project.hoverImage)}
                                onMouseOut={(e) => (e.currentTarget.src = project.mainImage)}
                            />
                        </a>
                        <button className="flex bg-button rounded-md border border-gray-400 hover:border-gray-300 mx-auto">
                            <a href={project.url} className="px-10 py-2">
                                Demo
                            </a>
                        </button>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
