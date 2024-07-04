import { motion } from 'framer-motion'
import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';


const WebExpCard = () => {


    const locomotiveScroll = new LocomotiveScroll();

    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="2.3" className='w-full py-10 z-40 relative rounded-t-[1vw] bg-[#004d43] flex overflow-hidden'>
        <motion.div 
            className='flex'
            initial={{ x: 0 }} 
            animate={{ x: "-136%" }} 
            transition={{ ease: "linear", repeat: Infinity, duration: 13 }}
            style={{ width: '200%' }} // Ensures the container width is twice as large to hold both text instances
        >
            <div className='flex font-danfo '>
                <h1 className='font-bebas text-white tracking-tight flex whitespace-nowrap gap-10 border-t-4 border-b-4 leading-[1] uppercase font-bold text-[22vw]'>
                    this is not a website it is an <i className='text-black'>experience</i>.
                </h1>
            </div>
            <div className='flex '>
                <h1 className='font-bebas text-white tracking-tight flex whitespace-nowrap gap-10 border-t-4 border-b-4 leading-[1] uppercase font-bold text-[22vw]'>
                    this is not a website it is an <i className='text-black'>experience</i> .
                </h1>
            </div>
        </motion.div>
    </div>
  )
}

export default WebExpCard
