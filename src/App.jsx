import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Route } from 'react-router-dom'


const App = () => {
  
  return (
    <div className='w-full min-h-screen bg-black font-mono'>
      <Nav/>
      <Home/>
      
    </div>
  )
}

export default App
