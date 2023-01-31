import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import discord from "../assets/discord.png";

const Footer = () => {
    return (
        <footer className="bg-tertiary w-full p-4 text-center">
            <p className="flex justify-center">
                <a href="https://www.linkedin.com/in/zlatomir-radev/" className="text-xl text-gray-300">
                    <img src={linkedin} alt="" width={35} />
                </a>
                <a href="https://github.com/zradev" className="text-xl text-gray-300">
                    <img src={github} alt="" width={35} className="mx-8" />
                </a>
                <a href="https://discordapp.com/users/807009787782234113" className="text-xl text-gray-300">
                    <img src={discord} alt="" width={35} />
                </a>
            </p>
        </footer>
    );
};

export default Footer;
