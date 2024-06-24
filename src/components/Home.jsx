import React, { useRef } from 'react'
import Hero from './Hero'
import Card from './Card'
import Exp from './Exp'
import WebExpCard from './WebExpCard'
import GameSection from './GameSection'
import ExpRNews from './ExpRNews'

const Home = () => {

  const ref = useRef(null)
  return (
    <div ref={ref} className='min-h-[100vh] min-w-[98.9vw]'>
      <Hero reference={ref}/>
      <WebExpCard/>
      <GameSection/>
      <Card reference={ref}/>
      <Exp/>
      <ExpRNews/>
    </div>
  )
}

export default Home
