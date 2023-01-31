import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import image from "../assets/developer.webp";

const Hero = () => {
    return (
        <section id="Home" className="flex flex-col-reverse md:flex-row justify-around items-center py-20 md:my-[100px]">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className="w-full md:w-1/3 p-5 space-y-8"
            >
                <h1 className="hidden md:block md:text-4xl">Discover the Power of Innovative Web Development.</h1>
                <p>
                    As a Web Developer, I strive to bring ideas to life through the creation of intuitive and dynamic web applications. With a focus on usability and functionality, I am dedicated to
                    delivering exceptional results for every project.
                </p>
                <div>
                    <Link to="Contact" activeClass="active" spy={true} duration={500} offset={-70} className="transition-all duration-100">
                        <button className="flex bg-button rounded-md border border-gray-400 hover:border-gray-300 mx-auto md:ml-10 px-5 py-2">Contact me</button>
                    </Link>
                </div>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="w-full md:w-1/3 p-5 space-y-8"
            >
                <img src={image} alt="" className="mx-auto w-[250px] md:w-[400px]" />
            </motion.div>
            <h1 className="text-2xl p-5 text-center md:hidden">Discover the Power of Innovative Web Development.</h1>
        </section>
    );
};

export default Hero;
