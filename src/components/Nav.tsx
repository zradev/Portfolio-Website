import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import { Link } from "react-scroll";
import { navigations } from "../utils/constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const circleVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 180,
            transition: {
                type: "spring",
                stiffness: 160,
                damping: 60
            }
        }
    };

    const ulVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1
            }
        }
    };

    return (
        <nav className={`fixed z-10 top-0 left-0 w-full transition-all duration-300 bg-tertiary p-4 flex justify-center lg:justify-around items-center text-[22px] select-none`}>
            <div className="w-[200px] lg:w-[300px] h-[56px] pt-1 lg:pt-0 mr-3">
                <img src={logo} alt="logo" />
            </div>
            <ul className="hidden lg:flex space-x-8 capitalize">
                {navigations.map((nav, index) => (
                    <li key={index} className="text-white hover:text-hover cursor-pointer">
                        <Link to={nav} activeClass="active" spy={true} duration={500} offset={-70} className="transition-all duration-100">
                            {nav}
                        </Link>
                    </li>
                ))}
                <li className="text-white hover:text-hover cursor-pointer">CV</li>
            </ul>
            <div className="lg:hidden">
                <div onClick={() => setIsOpen(true)} className="cursor-pointer absolute top-7 right-5">
                    <img src={menuIcon} alt="menu-icon" className="w-8 h-8" />
                </div>
                <motion.div variants={circleVariants} initial="hidden" animate={isOpen ? "visible" : "hidden"} className="w-4 h-4 rounded-full bg-tertiary fixed top-0 right-0"></motion.div>
                <motion.ul
                    variants={ulVariants}
                    initial="hidden"
                    animate={isOpen ? "visible" : ""}
                    className={`${isOpen ? "right-0" : "-right-full"} fixed top-0 bottom-0 w-full flex flex-col items-center justify-center space-y-6 transition-all duration-300 overflow-hidden`}
                >
                    <div onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-5 right-5">
                        <img src={closeIcon} alt="close-icon" className="w-8 h-8" />
                    </div>
                    {navigations.map((nav, index) => (
                        <li key={index}>
                            <Link to={nav} smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)} className="cursor-pointer">
                                {nav}
                            </Link>
                        </li>
                    ))}
                    <li onClick={() => setIsOpen(false)} className="text-white hover:text-hover cursor-pointer">
                        CV
                    </li>
                </motion.ul>
            </div>
        </nav>
    );
};

export default Navbar;
