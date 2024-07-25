import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";

// import banner from "../assets/bannertwo.webp";
// import banner from "../assets/footer.webp"
// import banner from "../assets/watercolor-banners.zip";


const Footer = () => {
  return (
    <div className="w-full rounded-t-[5vh] h-[95vh] text-white bg-pink-900 font-bebas tracking-[.2vh] flex justify-center items-center">
        <div className="flex flex-col mt-10">
            <img src="" className="" alt="" />
        <div className="container text-yellow-500 mx-auto text-center font-semibold">
        <p className="mb-1">© 2024 Mohd Murtaza Khan. All rights reserved.</p>
        <p className="mb-1">This website was meticulously crafted using the latest web technologies including React, GSAP, Locomotive Scroll, and Framer Motion. The combination of these tools has allowed me to bring dynamic and engaging animations to life, such as the rolling eyes effect and other cool visual experiences.</p>
        <p className="mb-1">As a passionate web developer, I am constantly exploring new ways to push the boundaries of web design and development. My goal is to create websites that are not only functional but also visually appealing and interactive.</p>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex mt-5 items-center justify-center gap-10">
          <span onClick={() => {window.open("https://x.com/murtazakhan1910?t=RX_qTiCkEGTHTwNGziAgow&s=09")}} className="text-black hover:text-yellow-500"><FaXTwitter size={24} /></span>
          <span onClick={() => {window.open("https://www.linkedin.com/in/murtaza-khan-58a44a25a/")}} className="text-black hover:text-yellow-500"><FaLinkedinIn size={24} /></span>
          <span onClick={() => {window.open("https://github.com/MurtazaKhannn")}} className="text-black hover:text-yellow-500"><PiGithubLogoFill  size={24}/></span>
          <span onClick={() => {window.open("https://www.instagram.com/")}} className="text-black hover:text-yellow-500"><BsInstagram size={24} /></span>
          <span className="text-black hover:text-yellow-500"><BiLogoGmail size={24} /></span>
        </div>
        
        
        
        <motion.div className="font-broken h-[50vh] text-[18vw] text-yellow-500">CREATIVE</motion.div>

        <div className="flex flex-col text-xl">
          <h1>mail Id : Murtazakhan1910@gmail.com</h1>
          <h1>Creativity is intelligence having fun!</h1>
        </div>
        
        


        </div>
      </div>
        </div>
      
    </div>
  );
};

export default Footer;
