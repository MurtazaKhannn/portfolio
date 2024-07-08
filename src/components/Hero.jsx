import React, {useEffect, useRef, useState } from 'react';
import { DiJavascript } from 'react-icons/di';
import { FaGithub, FaHtml5, FaJava, FaLinkedinIn, FaNode } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { SiCss3, SiExpress, SiMongodb } from 'react-icons/si';
import { Link } from 'react-scroll';
import { PiArrowFatLineDownFill } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import { gsap } from 'gsap';
import mmk from "../assets/mmk.jpg"
import { useGSAP } from '@gsap/react';
import LBCurve from "../assets/LBCurve.png"
import YCurve from "../assets/YCurve.png"
import RCurve from "../assets/RCurve.png"




const Hero = ({reference}) => {
    const ref = useRef(null)

    
    const [first , setfirst] = useState(0);
    const [recat , setrecat] = useState(0);
    const [time, setTime] = useState(false);
    const [rc , setrc] = useState('');
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [rotate , setRotate] = useState(0);

    const randomX = gsap.utils.random(-500 , 500 , 1);
    const rotateX = gsap.utils.random(-360 , 360 , 1);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    const cards = [useAnimation() , useAnimation() , useAnimation() , useAnimation() , useAnimation()];

    const handleHover = (index) => {
        cards[index].start({y:"0"});
    }




    

    useEffect(() => {
        window.addEventListener("mousemove",(e) => {
            let mouseX = e.clientX ;
            let mouseY = e.clientY ;
            // console.log(e);

            let deltaX = mouseX - window.innerWidth/2 ;
            let deltaY = mouseY - window.innerHeight/2 ;

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);
        }) ,
        gsap.to(".catch", {
            x : 1330 ,
            duration: 5,
            delay: 2,
            yoyo: true ,
            // repeat : -1 ,
            easy:'back',
        } ) ,
        
        gsap.to(".rotate" , {
            rotate: 48000000,
            duration:1000000,
            ease:'back',
            yoyo: true ,
            repeat: -1
        }); 

        const SheryMessage = () => {
            const element = createElement('div', null, 'Hello from SheryJS!');
            return element;
          };

        

        const timeHeading = setTimeout(() => {
            setTime(true);
        }, 7000);

        return () => {
            clearTimeout(timeHeading);
        };

    } , [first , recat]);

    return (
        <div ref={ref} className='min-h-[90vh] min-w-[98.9vw] text-white w-full bg-rekd-900'>
            <motion.img
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.2 }}
          dragElastic={0.1}
          className='xs:hidden h-[30vh] w-[30vw] absolute z-30'
          src={LBCurve}
          alt=""
          
        />  

        <motion.img
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.2 }}
          dragElastic={0.1}
          className='xs:hidden h-[30vh] w-[30vw] absolute z-30'
          src={YCurve}
          alt=""
          
        />  
            <div className="upper h-[45vh] w-full flex items-center justify-center">
                <div className='w-full items-center justify-center xs:h-[40vh] flex flex-col gap-5'>
                    <div data-scroll data-scroll-speed="-.3" className='eyes bg-zinc-900 z-10 -gap-10 flex flex-col items-center justify-center w-full h-[34vh] '>
                        <div className='flex items-center justify-center gap-16 w-full h-full'>
                        <div className='flex items-center justify-center w-[12vw] h-[25vh] xs:h-[13vh] xs:w-[27vw] bg-white rounded-full'> 
                            <div style={{transform:`rotate(${rotate}deg)`}} className=' flex items-center w-[7.3vw] h-[15.5vh] xs:h-[8vh] xs:w-[17vw] bg-black rounded-full'>
                                <div  className='flex items-center bg-white w-[2vw] h-[4vh] xs:w-[4vw] xs:h-[2vh] rounded-full' >
                                    <div className='bg-zinc-700 w-[1.5vw] h-[2.7vh] xs:w-[3vw] xs:h-[1.75vh] rounded-full'></div>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center justify-center w-[12vw] h-[25vh] xs:h-[13vh] xs:w-[27vw] bg-white rounded-full'>
                            <div style={{transform:`rotate(${rotate}deg)`}} className='flex items-center w-[7.3vw] h-[15.5vh] xs:h-[8vh] xs:w-[17vw] bg-black rounded-full'>
                                <div className='flex items-center bg-white w-[2vw] h-[4vh] xs:w-[4vw] xs:h-[2vh] rounded-full' >
                                <div className='bg-zinc-700 w-[1.5vw] h-[2.7vh] xs:w-[3vw] xs:h-[1.75vh] rounded-full '></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} whileDrag={{scale:1.2}} dragElastic={1} className='flex text-4xl xs:text-3xl xs:gap-5 items-center justify-center gap-10 rounded-full mt-5 bg-gradient-to-sr from-pink-700 to-orange-500'>
                        <div className='xs:hidden flex flex-col items-center justify-center'>
                            <h1 className='text-white ml-3 text-lg font-bold'>Tech-Stack : </h1>
                            <p className='text-xs'>(Draggable)</p>
                        </div>
                        <motion.div onMouseEnter={() => { setrc(getRandomColor()); setHoveredIndex(0); }} whileHover={{ scale: 1.2 }}  drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} whileDrag={{scale:1.2}} dragElastic={1} style={{ color: hoveredIndex === 0 ? rc : '' }} className='hover:text-yellow-200 '><DiJavascript /></motion.div>
                        <motion.div onMouseEnter={() => { setrc(getRandomColor()); setHoveredIndex(1); }} whileHover={{ scale: 1.2 }}  drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} whileDrag={{scale:1.2}} dragElastic={1} style={{ color: hoveredIndex === 1 ? rc : '' }} className='hover:text-yellow-200 '><SiCss3 /></motion.div>
                        <motion.div onMouseEnter={() => { setrc(getRandomColor()); setHoveredIndex(2); }} whileHover={{ scale: 1.2 }}  onMouseOver={() => {setrecat(rotateX)} } drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} style={{ color: hoveredIndex === 2 ? rc : '' }} whileDrag={{scale:1.2}} dragElastic={1} className='hover:text-yellow-200 rotate'><GrReactjs /></motion.div>
                        <motion.div onMouseEnter={() => { setrc(getRandomColor()); setHoveredIndex(3); }} whileHover={{ scale: 1.2 }}  drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} whileDrag={{scale:1.2}} dragElastic={1} style={{ color: hoveredIndex === 3 ? rc : '' }} className='' ><FaNode /></motion.div>
                        <motion.div onMouseEnter={() => { setrc(getRandomColor()); setHoveredIndex(4); }} whileHover={{ scale: 1.2 }}  drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} whileDrag={{scale:1.2}} dragElastic={1} style={{ color: hoveredIndex === 4 ? rc : '' }} className='hover:text-yellow-200 '><SiExpress /></motion.div>
                        <motion.div onMouseEnter={() => { setrc(getRandomColor()); setHoveredIndex(5); }} whileHover={{ scale: 1.2 }}  drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} whileDrag={{scale:1.2}} dragElastic={1} style={{ color: hoveredIndex === 5 ? rc : '' }} className='hover:text-yellow-200 '><SiMongodb /></motion.div>
                        <motion.div onMouseEnter={() => { setrc(getRandomColor()); setHoveredIndex(6); }} whileHover={{ scale: 1.2 }}  drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} whileDrag={{scale:1.2}} dragElastic={1} style={{ color: hoveredIndex === 6 ? rc : '' }} className='hover:text-yellow-200'><FaHtml5 /></motion.div>
                        <motion.div onMouseEnter={() => { setrc(getRandomColor()); setHoveredIndex(7); }} whileHover={{ scale: 1.2 }}  drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} whileDrag={{scale:1.2}} dragElastic={1} style={{ color: hoveredIndex === 7 ? rc : '' }} className='hover:text-yellow-200 '><FaJava /></motion.div>
                    </motion.div>
                </div>
            </div>
            <div className=" lower h-[45vh] flex flex-col gap-5 w-full">
                <div className=' p-5 flex flex-col gap-5 justify-center items-centeer'>
                    <div className='-mt-10 flex items-center flex-col text-4xl font-mono font-bold pt-10 text-[5vh] xs:text-lg'>  I'm Mohd Murtaza Khan, a MERN <br /> </div>
                    <div>
                        <div className='-mt-5 flex gap-5 items-center justify-center '>
                            <motion.div initial={{width:0 }} animate={{width:"8vw"}} transition={{ease: [0.76 , 0 , 0.24 , 1] , duration : 1 , delay: 2 , repeat: Infinity , repeatDelay:2 , repeatType: "mirror" }}  className=' h-[6vh] xs:h-[4vh] text-black rounded-md flex items-center xs:hidden justify-center w-[5vw] bg-red-600 text-3xl uppercase font-bold xs:text-sm'>hey</motion.div>
                            <motion.div initial={{width:0 , wordSpacing:'-2em' , opacity:0}} animate={{width:"40vw" , wordSpacing:'.01em' , opacity:1}} transition={{ease: "backInOut" , duration : 1 , delay: 4 ,repeat: Infinity , repeatDelay:2 , repeatType: "mirror"}} className='h-[6vh] whitespace-nowrap rounded-md flex items-center justify-center w-[35vw] bg-blue-600 text-3xl uppercase font-bold xs:text-sm xs:hidden xs:flex flex-col'>YOU ARE UNDER MY SURVEILLANCE</motion.div>
                            <div className='text-[5vh] font-bold xs:text-lg'> Stack Developer Based in INDIA.</div>
                        </div>

                    </div>
                <div className='flex xs:hidden relative overflow-x-hidden '>
                    <div onMouseOver={() => {setfirst(randomX)} } className=' flex items-center hover:text-zinc-900 w-full xs:w-[20vw] z-10 bg-black font-semibold catch cursor-pointer flex gap-4 '> <img className='h-[12vh] xs:h-[4vh]' src="https://media.gettyimages.com/id/1387604555/video/generic-racecar-prototype-photorealistic-render-silhouette-on-black.jpg?s=640x640&k=20&c=A7agC8bcXDFuiaeKQsYPoVDXb2Gbv6fUmjoazlk9idE=" alt="" />
                    </div>
                    <div >
                        <h2 className='text-white absolute top-0 left-0 bg-red-600 h-20 xs:h-7 rounded-md pl-5 font-bold uppercase text-7xl xs:text-xl'>Welcome TO my portfolio.HAVE FUN!</h2>
                    </div>
                </div>

                <div className='flex relative overflow-x-hidden hidden xs:flex '>
                    <div  className=' flex items-center hover:text-zinc-900 w-full xs:w-[20vw] z-10 font-semibold catch cursor-pointer flex gap-4'> <div className='h-[12vh] xs:h-[4vh]' ></div>
                    </div>
                    <div>
                        <h2 className='text-white absolute top-0 left-0 bg-red-600 h-20 xs:h-7 rounded-md pl-5 font-bold uppercase text-7xl xs:text-xl xs:pr-1'>Welcome TO my PORTFOLIO.</h2>
                    </div>
                </div>

                    <p className='font-semibold text-zinc-500 xs:text-xs '>Hello, I'm Mohd Murtaza Khan, a passionate MERN stack developer based in the vibrant city of New Delhi, India. With a strong foundation in modern web development technologies.
                        Over the years, I have honed my skills in <i>JavaScript</i> , <i>React.js</i> , <i>Node.js</i> , and <i>MongoDB</i>  the key components of the MERN stack—to craft dynamic and interactive web applications.</p>
                </div>
                {/* <div className='flex items-center justify-center gap-40'>
                    <Link className='border-2 text-xs border-black px-5 py-3 rounded-full cursor-pointer hover:border-red-500'>My projects</Link>
                    <Link className='border-2 border-blue-700 text-xs px-5 py-3 rounded-full cursor-pointer hover:border-black'>My Resume</Link>
                </div> */}
                <div className='xs:mt-[-10rem] flex items-center justify-center text-3xl font-danfo xs:text-sm'>
                    
                    <div className='flex flex-col items-center justify-center w-1/3 h-[70vh] gap-10 p-5 xs:text-2xl'>
                        <div className='flex flex-col xs:hidden font-bold items-center justify-center pl-8 font-poiret w-[30vw] h-[15vh] xs:h-[10vh] xs:text-sm'>
                            <motion.div  >"My network is stronger than my coffee addiction!"</motion.div>
                            <motion.div  whileHover={{opacity:1}} initial={{opacity:0}} className='text-[#f8e112]' >And I Have No Coffee Addiction!!</motion.div>
                        </div>
                        <div className='xs:w-[50vw] xs:[50vh]'>
                        <motion.div onClick={() => {window.open('https://github.com/MurtazaKhannn')}} className='cursor-pointer' whileHover={{scale:1.3 , originX:0 , color:'#f8e112'}} transition={{type:'spring' , stiffness:300}}>
                            ▪️ Github
                        </motion.div>
                        <motion.div onClick={() => {window.open('https://www.linkedin.com/in/murtaza-khan-58a44a25a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}} className='cursor-pointer' whileHover={{scale:1.3 , originX:0 , color:'#f8e112'}} transition={{type:'spring' , stiffness:300}}>
                            ▪️ LinkedIn
                        </motion.div>
                        <motion.div onClick={() => {window.open('https://www.instagram.com/')}} className='cursor-pointer' whileHover={{scale:1.3 , originX:0 , color:'#f8e112'}} transition={{type:'spring' , stiffness:300}}>
                            ▪️ Instagram
                        </motion.div>
                        <motion.div onClick={() => {window.open('https://x.com/murtazakhan1910?t=PZCTNWX4l2N3w2kFZJh29w&s=09')}} className='cursor-pointer' whileHover={{scale:1.3 , originX:0 , color:'#f8e112'}} transition={{type:'spring' , stiffness:300}}>
                            ▪️ X
                        </motion.div>
                        <motion.div onClick={() => {window.open('https://www.instagram.com/')}} className='cursor-pointer' whileHover={{scale:1.3 , originX:0 , color:'#f8e112'}} transition={{type:'spring' , stiffness:300}}>
                            ▪️ Gmail
                        </motion.div>
                        </div>
                        
                    </div>
                    <div className='flex center items-center flex-col gap-10 xs:gap-5 justify-center w-1/3 h-[70vh]'>
                        <h1 className='p-2 xs:text-2xl'>ABOUT ME</h1>
                        <div  className='xs:hidden relative overflow-hidden border-2 border-white bg-white w-[15vw] h-[32vh] xs:h-[10vh] xs:w-[21vw] rounded-full'>
                            <motion.div className='absolute w-full h-full bg-white flex z-10 items-center justify-center text-black text-lg font-mono font-bold flex-col '><p className='font-danfo text-4xl xs:text-lg'>Hover</p></motion.div>
                            <motion.div whileHover={{opacity:1 ,scale:1.01}} initial={{opacity:0}} className='absolute z-20 w-full h-full'><img className=' w-full h-full object-cover' src={mmk} alt="" /></motion.div>
                        </div>
                        <div className='relative hidden xs:flex overflow-hidden border-2 border-white bg-white w-[15vw] h-[32vh] xs:h-[15vh] xs:w-[33vw] rounded-full'>
                            {/* <motion.div className='absolute w-full h-full bg-white flex z-10 items-center justify-center text-black text-lg font-mono font-bold flex-col '><p className='font-danfo text-4xl xs:text-lg'>Hover</p></motion.div> */}
                            <motion.div whileHover={{opacity:1 ,scale:1.01}} initial={{opacity:0}} className='absolute z-20 w-full h-full'><img className=' w-full h-full object-cover' src={mmk} alt="" /></motion.div>
                        </div>
                        <div className='font-bebas p-5 xs:text-xl xs:w-[50vw]'>"Web wizard Murtaza Khan: turning caffeine into code since forever!"</div>
                    </div>
                    <div className='flex xs:hidden flex-col items-center justify-center w-1/3 h-[70vh]'>
                        <div className='flex flex-col items-center justify-center'>
                            {/* <motion.h1 className='flex flex-col items-center justify-center cursor-pointer mr-20 text-4xl' whileHover={{scale:1.3 , originX:.1 , originY:.1 , color:'purple'}} transition={{type:'spring' , stiffness:900}}>SECTIONS</motion.h1> */}
                            <motion.div className='mt-10' whileHover={{scale:1.3 , originX:.1 , originY:.1 , color:'red'}} transition={{type:'spring' , stiffness:900}}>
                                <PiArrowFatLineDownFill />
                            </motion.div>
                        </div>
                        <div>

                        </div>
                        <div className='overflow-hidden p-5 xs:hidden'>
                            <motion.div className='cursor-pointer' whileHover={{scale:1.3 , originX:0 , color:'orange'}} transition={{type:'spring' , stiffness:300}} >
                                ▪️ Gaming
                            </motion.div>
                            <motion.div className='cursor-pointer' whileHover={{scale:1.3 , originX:0 , color:'orange'}} transition={{type:'spring' , stiffness:300}} >
                                ▪️ Projects
                            </motion.div>
                            <motion.div className='cursor-pointer' whileHover={{scale:1.3 , originX:0 , color:'orange'}} transition={{type:'spring' , stiffness:300}} >
                                ▪️ Experience
                            </motion.div>
                            <motion.div className='cursor-pointer w-[17vw]' whileHover={{scale:1.3 , originX:0 , color:'orange'}} transition={{type:'spring' , stiffness:700}}>
                                ▪️ I dont know what else.
                            </motion.div>
    
                        </div>
                    </div>
                </div>

                
            </div>

            <motion.img
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.2 }}
          dragElastic={0.1}
          className='h-[30vh] w-[30vw] absolute z-30'
          src={RCurve}
          alt=""
          
        /> 

        </div>
    );
}

export default Hero;
