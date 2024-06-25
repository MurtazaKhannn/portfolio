import React from 'react'
import ssgo from '../assets/SSGO.png';
import ssgf from '../assets/SSGF.png';
import tttg from  '../assets/TTTG.png';
import { motion } from 'framer-motion';


const GameSection = () => {
  return (
    <div id='GameSection' className='min-w-full min-h-[100vh] text-white mt-[20vh] items-center justify-center '>
      <div className='flex items-center text-black bg-yellow-400 justify-center font-bold'>
        <h1>I asked a gamer if they wanted to play hide and seek. They said they would, but their graphics card couldn't handle it!</h1>
      </div>
      <div className='p-10'>
            <div className='flex items-center justify-center'>
                <h1 className='font-danfo text-4xl mt-5 hover:text-red-700'>Gaming Section</h1>
            </div>
            <div className='mt-[12vh] flex flex-col items-center justify-between gap-[10vw]'>
                
                <div className='flex items-center justify-between w-full'>
                <div className='relative h-[60vh] w-[40vw]'>
                <motion.div  whileHover={{opacity:0 ,scale:1.01}} initial={{opacity:1}} className='flex items-center justify-center text-4xl font-bold font-danfo absolute w-[40vw] h-[60vh] bg-black z-40 h-full z-index-30'>SIMON SAYS</motion.div>
                <div className='flex items-center justify-center flex-col w-[40vw] p-6 h-[60vh] bg-black rounded-[5vh] gap-5'>
                    <h1 className='font-bebas text-4xl flex items-center '>SIMON SAYS</h1>
                    <div className='flex overflow-hidden'>
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-74vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity  , ease:'linear' }} className='rounded-md' src={ssgf} alt="" />
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-74vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity , ease:'linear'  }} className='rounded-md' src={ssgo} alt="" />
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-74vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity  , ease:'linear' }} className='rounded-md' src={ssgf} alt="" />
                    </div>
                </div>
                <div  className='flex gap-20 items-center justify-center'>
                        <button onClick={() => {window.open('https://github.com/MurtazaKhannn/Simon-Says-game-using-HTML-CSS-JS-')}}>Github</button>
                        <button onClick={() => {window.open('https://murtazakhannn.github.io/Simon-Says-game-using-HTML-CSS-JS-/')}}>Play</button>
                </div>
                </div>
                
                <div className='h-[60vh] w-[40vw] relative'>
                    <motion.div  whileHover={{opacity:0 ,scale:1.01}} initial={{opacity:1}} className='flex items-center justify-center text-4xl font-bold font-danfo absolute w-[40vw] h-[60vh] bg-black z-40 h-full z-index-30'>TIC TAC TOE</motion.div>
                    <div className='flex items-center justify-center flex-col w-[40vw] p-6 h-[60vh] bg-black rounded-[5vh] gap-4'>
                    <h1 className='font-bebas text-4xl flex items-center'>TIC TAC TOE</h1>
                    <div className='flex overflow-hidden'>
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-70vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity  , ease:'linear' }} className='rounded-md' src={tttg} alt="" />
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-70vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity , ease:'linear' }} className='rounded-md' src="https://wallpapers.com/images/hd/simple-pictures-0m4vk4xbx09p1gg7.jpg" alt="" />
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-70vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity  , ease:'linear' }} className='rounded-md' src={tttg} alt="" />
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-70vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity , ease:'linear' }} className='rounded-md' src="https://wallpapers.com/images/hd/simple-pictures-0m4vk4xbx09p1gg7.jpg" alt="" />
                    </div>
                    </div>
                    <div  className='flex gap-20 justify-center items-center'>
                        <button onClick={() => {window.open('https://github.com/MurtazaKhannn/TicTacToe')}}>Github</button>
                        <button onClick={() => {window.open('https://tictactoemk.netlify.app/')}}>Play</button>
                    </div>
                </div>
                </div>

                {/* <div className='flex items-center justify-between w-full'>
                <div className='h-[60vh] w-[40vw] relative'>
                    <motion.div  whileHover={{opacity:0 ,scale:1.01}} initial={{opacity:1}} className='flex items-center justify-center text-4xl font-bold font-danfo absolute w-[40vw] h-[60vh] bg-black z-40 h-full z-index-30'>TIC TAC TOE</motion.div>
                    <div className='flex items-center justify-center flex-col w-[40vw] p-6 h-[60vh] bg-black rounded-[5vh] gap-4'>
                    <h1 className='font-bebas text-4xl flex items-center'>TIC TAC TOE</h1>
                    <div className='flex overflow-hidden'>
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-70vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity  , ease:'linear' }} className='rounded-md' src={tttg} alt="" />
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-70vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity , ease:'linear' }} className='rounded-md' src="https://wallpapers.com/images/hd/simple-pictures-0m4vk4xbx09p1gg7.jpg" alt="" />
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-70vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity  , ease:'linear' }} className='rounded-md' src={tttg} alt="" />
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-70vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity , ease:'linear' }} className='rounded-md' src="https://wallpapers.com/images/hd/simple-pictures-0m4vk4xbx09p1gg7.jpg" alt="" />
                    </div>
                    </div>
                    <div  className='flex gap-20 justify-center items-center'>
                        <button>Github</button>
                        <button>Play</button>
                    </div>
                </div> */}

                {/* <div className='h-[60vh] w-[40vw] relative'>
                    <motion.div  whileHover={{opacity:0 ,scale:1.01}} initial={{opacity:1}} className='flex items-center justify-center text-4xl font-bold font-danfo absolute w-[40vw] h-[60vh] bg-black z-40 h-full z-index-30'>TIC TAC TOE</motion.div>
                    <div className='flex items-center justify-center flex-col w-[40vw] p-6 h-[60vh] bg-black rounded-[5vh] gap-4'>
                    <h1 className='font-bebas text-4xl flex items-center'>TIC TAC TOE</h1>
                    <div className='flex overflow-hidden'>
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-70vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity  , ease:'linear' }} className='rounded-md' src={tttg} alt="" />
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-70vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity , ease:'linear' }} className='rounded-md' src="https://wallpapers.com/images/hd/simple-pictures-0m4vk4xbx09p1gg7.jpg" alt="" />
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-70vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity  , ease:'linear' }} className='rounded-md' src={tttg} alt="" />
                    <motion.img initial={{ x: "0" }}   animate={{ x: "-70vw" }}   transition={{ duration: 9, delay: 1 , repeat:Infinity , ease:'linear' }} className='rounded-md' src="https://wallpapers.com/images/hd/simple-pictures-0m4vk4xbx09p1gg7.jpg" alt="" />
                    </div>
                    </div>
                    <div  className='flex gap-20 justify-center items-center'>
                        <button>Github</button>
                        <button>Play</button>
                    </div>
                </div>
                </div> */}

                
            </div>
            
      </div>
      
      
    </div>
  )
}

export default GameSection
