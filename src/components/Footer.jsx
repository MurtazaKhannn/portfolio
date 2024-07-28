import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full rounded-t-[5vh] h-auto min-h-[50vh] text-white bg-pink-900 font-bebas tracking-[.2vh] flex flex-col items-center py-10">
      <div className="container mx-auto text-center text-yellow-500">
        <img src="" className="mb-4" alt="" />

        <p className="mb-4 text-sm sm:text-base lg:text-lg">
          © 2024 Mohd Murtaza Khan. All rights reserved.
        </p>
        <p className="mb-4 text-sm sm:text-base lg:text-lg">
          This website was meticulously crafted using the latest web technologies including React, GSAP, Locomotive Scroll, and Framer Motion. The combination of these tools has allowed me to bring dynamic and engaging animations to life, such as the rolling eyes effect and other cool visual experiences.
        </p>
        <p className="mb-4 text-sm sm:text-base lg:text-lg">
          As a passionate web developer, I am constantly exploring new ways to push the boundaries of web design and development. My goal is to create websites that are not only functional but also visually appealing and interactive.
        </p>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <span
            onClick={() => window.open("https://x.com/murtazakhan1910?t=RX_qTiCkEGTHTwNGziAgow&s=09")}
            className="text-black hover:text-yellow-500"
          >
            <FaXTwitter size={24} />
          </span>
          <span
            onClick={() => window.open("https://www.linkedin.com/in/murtaza-khan-58a44a25a/")}
            className="text-black hover:text-yellow-500"
          >
            <FaLinkedinIn size={24} />
          </span>
          <span
            onClick={() => window.open("https://github.com/MurtazaKhannn")}
            className="text-black hover:text-yellow-500"
          >
            <PiGithubLogoFill size={24} />
          </span>
          <span
            onClick={() => window.open("https://www.instagram.com/")}
            className="text-black hover:text-yellow-500"
          >
            <BsInstagram size={24} />
          </span>
          <span className="text-black hover:text-yellow-500">
            <BiLogoGmail size={24} />
          </span>
        </div>

        <motion.div
          className="font-broken text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] text-yellow-500 mt-8"
        >
          CREATIVE
        </motion.div>

        <div className="flex flex-col text-sm sm:text-base lg:text-xl mt-4">
          <h1>mail Id: Murtazakhan1910@gmail.com</h1>
          <h1>Creativity is intelligence having fun!</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
