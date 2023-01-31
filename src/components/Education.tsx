import React from "react";
import image from "../assets/developer.png";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section id="Education" className="p-10">
            <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="text-4xl text-center"
            >
                Education
            </motion.h1>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className="flex flex-col md:flex-row justify-around items-center py-20"
            >
                <img src={image} alt="about" className="md:w-1/2" />
                <div className="mt-10 md:mt-0 md:w-1/3">
                    <h1 className="text-2xl">Bachelor of Informatics</h1>
                    <h2 className="text-lg mb-5">Plovdiv University | 2019 - now</h2>
                    <p>
                        I am currently pursuing a degree in Informatics and have been studying various IT disciplines for the past 4 years. In addition to my formal education, I have also been honing
                        my skills in web development through self-study by completing online courses, watching videos and reading through various technical documentation for the past year.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
