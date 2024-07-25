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
    <div className="w-full rounded-t-[5vh] h-[80vh] text-white bg-pink-900 font-bebas tracking-[.2vh] flex justify-center items-center">
        <div className="flex flex-col mt-10">
            <img src="" className="" alt="" />
        <div className="container text-yellow-500 mx-auto text-center font-semibold">
        <p className="mb-1">© 2024 Mohd Murtaza Khan. All rights reserved.</p>
        <p className="mb-1">This website was meticulously crafted using the latest web technologies including React, GSAP, Locomotive Scroll, and Framer Motion. The combination of these tools has allowed me to bring dynamic and engaging animations to life, such as the rolling eyes effect and other cool visual experiences.</p>
        <p className="mb-1">As a passionate web developer, I am constantly exploring new ways to push the boundaries of web design and development. My goal is to create websites that are not only functional but also visually appealing and interactive.</p>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex mt-5 items-center justify-center gap-10">
          <span className="text-black"><FaXTwitter size={24} /></span>
          <span className="text-black"><FaLinkedinIn size={24} /></span>
          <span className="text-black"><PiGithubLogoFill  size={24}/></span>
          <span className="text-black"><BsInstagram size={24} /></span>
          <span className="text-black"><BiLogoGmail size={24} /></span>
        </div>
        
        
        
        <motion.div className="font-broken h-[50vh] text-[18vw] text-yellow-500">CREATIVE</motion.div>
        
        


        </div>
      </div>
        </div>
      
    </div>
  );
};

export default Footer;
