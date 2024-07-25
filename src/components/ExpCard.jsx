import { motion } from 'framer-motion';
import React from 'react';

const ExpCard = (props) => {
  return (
    <div id='experience' className='hover:scale-110 w-[20vw] h-[40vh] xs:w-[40vw] xs:h-[25vh] rounded-md bg-zinc-900 flex flex-col gap-5 text-white'>
      <div className='flex items-center justify-center h-[50%]'>
        {props.img ? (
          <img 
            className='rounded-md w-28 h-28 object-cover' 
            src={props.img} 
            alt={props.name} 
          />
        ) : (
          <div className={`rounded-md w-full h-full ${props.color} flex items-center justify-center text-7xl text-black font-bebas`}>
            {props.name}
          </div>
        )}
      </div>
      <div className='flex flex-col items-center h-[50%]'>
        <motion.div className='text-xl' initial={{rotate:180}} whileHover={{scale:2 , rotate:0 , color:'orange'}} transition={{type:'spring' , stiffness:300}}>{props.Position}</motion.div>
        <motion.div className='text-lg' whileHover={{scale:1.3  , color:'yellow'}} transition={{type:'spring' , stiffness:300}}>{props.Experience}</motion.div>
        <motion.div onClick={() => {window.open(`${props.Link}`)}} className='text-lg' whileHover={{scale:1.3 , color:'yellow'}} transition={{type:'spring' , stiffness:300}}>{props.Proof}</motion.div>
      </div>
    </div>
  );
};

export default ExpCard;
