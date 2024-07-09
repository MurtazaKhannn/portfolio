import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { motion } from "framer-motion";
import allProjects from "../assets/allprojects";

const Card = () => {
  const cardRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const handleCardMouseEnter = (index) => {
    gsap.to(cardRefs.current[index], {
      rotate: 2,
      duration: 0.41,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut",
    });
  };

  const handleCardMouseLeave = (index) => {
    gsap.killTweensOf(cardRefs.current[index]);
    gsap.to(cardRefs.current[index], {
      rotate: -2,
      duration: 0.41,
    });
  };

  return (
    <div
      id="projects"
      className="flex flex-col bg-black items-center justify-center w-full justify-center items-center pl-24 xs:min-h-[50vh] min-h-screen gap-10 overflow-hidden"
    >
      <h1 className="text-white font-danfo text-4xl hover:text-green-700 xs:mr-[20vw]">
        Projects
      </h1>
      <div className="flex flex-wrap xs:flex-col">
        {allProjects.map((data, index) => (
          <div className="flex items-center justify-center gap-10 " key={index}>
            <div className="left flex flex-col items-center justify-center gap-10">
              <div className="flex gap-5">
                <h1 className="font-bebas text-4xl hover:text-[#f0a342]">
                  {data.name}
                </h1>
              </div>

              <div
                ref={addToRefs}
                className="rotate-card w-[45vw] h-[50vh] xs:h-[20vh] xs:w-[80vw] bg-zinc-900 rounded-md flex xs:mr-12"
                onMouseEnter={() => handleCardMouseEnter(index)}
                onMouseLeave={() => handleCardMouseLeave(index)}
              >
                <div className="left text-white flex flex-col items-center justify-center w-[80vw]">
                  <video muted autoPlay loop src={data.video}></video>
                </div>
              </div>

              <div className="flex gap-20 mt-5 xs:mt-0 text-white xs:mr-24">
                <motion.button
                  whileHover={{
                    scale: 2,
                    opacity: 1,
                    rotate: 180,
                    backgroundColor: "black",
                    transition: { duration: 0.5 },
                  }}
                  className="opacity-50 flex gap-2 items-center px-4 py-3 text-xs rounded-md hover:border-red-500 bg-[#f00357]"
                  onClick={() => {window.open(`${data.github}`)}}
                >
                  <FaGithub size={18} />
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 2,
                    opacity: 1,
                    rotate: -180,
                    backgroundColor: "black",
                    transition: { duration: 0.5 },
                  }}
                  className="opacity-50 flex gap-2 items-center px-4 py-3 text-xs rounded-md hover:border-blue-500 bg-[#f00357]"
                  onClick={() => {window.open(`${data.live}`)}}
                >
                  <MdLiveTv size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
