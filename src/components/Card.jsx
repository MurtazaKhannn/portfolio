import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { motion } from "framer-motion";
import allProjects from "../assets/allprojects";

const Card = (props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Add any additional setup if needed
  }, []);

  const handleCardMouseEnter = () => {
    gsap.to(cardRef.current, {
      rotate: 2,
      duration: 0.41,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut",
    });
  };

  const handleCardMouseLeave = () => {
    gsap.killTweensOf(cardRef.current);
    gsap.to(cardRef.current, {
      rotate: -2,
      duration: 0.41,
    });
  };

  return (
    <div id="projects" className="flex flex-col bg-black items-center justify-center w-full justify-center items-center pl-24 min-h-screen gap-10 overflow-hidden" >
      <h1 className="text-white font-danfo text-4xl hover:text-green-700">
        Projects
      </h1>
      <div className="flex flex-wrap">
      {allProjects.map((data) => {
        return (
          
          <div className="flex items-center justify-center gap-10">
            <div className="left flex flex-col items-center justify-center gap-10">
              <div className="flex gap-5">
                <h1 className="font-bebas text-4xl hover:text-[#f0a342]">
                  {data.name}
                </h1>
              </div>

              <div
                ref={cardRef}
                className="rotate-card w-[45vw] h-[50vh] bg-zinc-900 rounded-md flex"
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="left text-white flex flex-col items-center justify-center w-[80vw]">
                  <video muted autoPlay loop src={data.video}></video>
                </div>
              </div>

              <div className="flex gap-20 mt-5 text-white">
                <motion.button
                  whileHover={{
                    scale: 2,
                    opacity: 1,
                    rotate: 180,
                    backgroundColor: "black",
                    transition: { duration: 0.5 },
                  }}
                  className="opacity-50 flex gap-2 items-center px-4 py-3 text-xs rounded-md hover:border-red-500 bg-[#f00357]"
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
                >
                  <MdLiveTv size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        );
      })}
      </div>
      
    </div>
  );
};

export default Card;
