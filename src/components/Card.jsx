import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FaGithub, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { MdLiveTv } from 'react-icons/md';
import { RiTailwindCssFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import black from "../assets/black_1.mp4"





const Card = ({ reference }) => {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  useEffect(() => {
  }, [])
  


  const handleCardMouseEnter = (ref) => {
    gsap.to(ref.current, {
      rotate: 2,
      duration: 0.41,
      yoyo: true,
      repeat: -1,
      ease: 'power2.inOut'
    });
  };


  const handleCardMouseLeave = (ref) => {
    gsap.killTweensOf(ref.current);
    gsap.to(ref.current, {
      rotate: -2,
      duration: 0.41, 
    });
  };

  return (
    <div id='projects' className='flex flex-col bg-black items-center justify-center w-full h-screen gap-10 overflow-hidden'>
      <h1 className='text-white font-danfo text-4xl hover:text-green-700'>Projects</h1>
      <div className='flex items-center justify-center gap-10'>


      <div className='left flex flex-col items-center justify-center gap-10'>
        <div className='flex gap-5'>
        <h1 className=' font-bebas text-4xl hover:text-green-400'>SILVA</h1>
        <h1 className=' font-bebas text-4xl hover:text-[#f0a342]'>NEST</h1>
        </div>
      
      <div
        ref={cardRef1}
        className='rotate-card w-[45vw] h-[50vh] bg-zinc-900 rounded-md flex'
        onMouseEnter={() => handleCardMouseEnter(cardRef1)}
        onMouseLeave={() => handleCardMouseLeave(cardRef1)}
      >
        <div className='left text-white flex flex-col items-center justify-center w-[80vw]'>
          <video muted autoPlay loop src={black}></video>
        </div>
        
      </div>

      <div className='flex gap-20 mt-5 text-white'>
            <motion.button whileHover={{scale:2 , opacity:1 , rotate: 180, backgroundColor: "black", transition: { duration: .5 }}} className='opacity-50 flex gap-2 items-center px-4 py-3 text-xs rounded-md hover:border-red-500 bg-[#f00357]'><FaGithub size={18} /></motion.button>
            <motion.button whileHover={{scale:2 , opacity:1 , rotate: -180, backgroundColor: "black", transition: { duration: .5 }}} className='opacity-50 flex gap-2 items-center px-4 py-3 text-xs rounded-md hover:border-blue-500 bg-[#f00357]'><MdLiveTv size={18} /></motion.button>
      </div>
      </div>

      <div className='left flex flex-col items-center justify-center gap-10'>
        <div className='flex gap-5'>
        <h1 className=' font-bebas text-4xl hover:text-green-400'>SILVA</h1>
        <h1 className=' font-bebas text-4xl hover:text-[#f0a342]'>NEST</h1>
        </div>
      
      <div
        ref={cardRef2}
        className='rotate-card w-[45vw] h-[50vh] bg-zinc-900 rounded-md flex'
        onMouseEnter={() => handleCardMouseEnter(cardRef2)}
        onMouseLeave={() => handleCardMouseLeave(cardRef2)}
      >
        <div className='left text-white flex flex-col items-center justify-center w-[80vw]'>
          <video muted autoPlay loop src={black}></video>
        </div>
        
      </div>

      <div className='flex gap-20 mt-5 text-white'>
            <motion.button whileHover={{scale:2 , opacity:1 , rotate: 180, backgroundColor: "black", transition: { duration: .5 }}} className='opacity-50 flex gap-2 items-center px-4 py-3 text-xs rounded-md hover:border-red-500 bg-[#FF312E]'><FaGithub size={18} /></motion.button>
            <motion.button whileHover={{scale:2 , opacity:1 , rotate: -180, backgroundColor: "black", transition: { duration: .5 }}} className='opacity-50 flex gap-2 items-center px-4 py-3 text-xs rounded-md hover:border-blue-500 bg-[#FF312E]'><MdLiveTv size={18} /></motion.button>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default Card;
