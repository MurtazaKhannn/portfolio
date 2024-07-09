import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'

const ExpRNews = () => {
    // const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='min-h-[10vh] xs:hidden overflow-hidden'>
      <motion.div 
            className='flex'
            initial={{ x: 0 }} 
            animate={{ x: "-93%" }} 
            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
            style={{ width: '100%' }} // Ensures the container width is twice as large to hold both text instances
        >
            <div className='flex font-danfo '>
                <h1 className='font-bebas text-white tracking-tight flex whitespace-nowrap gap-10 border-t-4 border-b-4 leading-[1] uppercase font-bold text-[2vw]'>
                    Because in the world of work experience, it's not just about what you've done—it's about how stylishly you can fit it all on one page!<i className='text-yellow-500'>LISTEN</i>.
                </h1>
            </div>
            <div className='flex '>
                <h1 className='font-bebas text-white tracking-tight flex whitespace-nowrap gap-10 border-t-4 border-b-4 leading-[1] uppercase font-bold text-[2vw]'>
                    Because in the world of work experience, it's not just about what you've done—it's about how stylishly you can fit it all on one page!<i className='text-yellow-500'>LISTEN</i> .
                </h1>
            </div>
            <div className='flex '>
                <h1 className='font-bebas text-white tracking-tight flex whitespace-nowrap gap-10 border-t-4 border-b-4 leading-[1] uppercase font-bold text-[2vw]'>
                    Because in the world of work experience, it's not just about what you've done—it's about how stylishly you can fit it all on one page!<i className='text-yellow-500'>LISTEN</i> .
                </h1>
            </div>
        </motion.div>
    </div>
  )
}

export default ExpRNews
