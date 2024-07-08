import React from 'react';
import { Link, ScrollLink } from 'react-scroll';
import { FaPhone } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className='flex h-[10vh] xs:h-[15vh] xs:pb-5 justify-between w-full items-center'>
      <h1 className='text-4xl ml-8 font-bold '>
        <i className='font-bebas text-red-700 flex'>
          Murtaza <p className='text-white'>.</p> <p className='text-blue-500 xs:pr-5'>Dev</p>
        </i>
      </h1>
      <div className='text-white w-[60%] xs:gap-3 justify-evenly flex items-center'>
        <Link to="home" smooth={true} duration={2000} className='hover:border-b-4 xs:hidden hover:border-yellow-400 py-2 rounded cursor-pointer'>Home</Link>
        <Link to="GameSection" smooth={true} duration={2000} className='hover:border-b-4 hover:border-yellow-400 py-2 rounded cursor-pointer'>GameSection</Link>
        <Link smooth={true} duration={2000} to="projects" className='hover:border-b-4 hover:border-yellow-400 py-2 rounded cursor-pointer'>Projects</Link>
        <Link to="experience" smooth={true} duration={2500} className='hover:border-b-4 hover:border-yellow-400 py-2 rounded cursor-pointer'>Experience</Link>
        <div className='hidden xs:flex xs:pr-10'><FaPhone size={15} color='white' /></div>
      </div>
      <div className='flex w-[20vw] xs:hidden'>
        <Link to="contact" smooth={true} duration={500} className='flex items-center gap-2 bg-white text-black font-semibold hover:text-yellow-500 px-3 py-2 rounded-full ml-[10vw] hover:text-white hover:bg-black cursor-pointer'>
          Contact Me <p className='text-black hover:text-black'><FaPhone size={15} color='white' /></p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
