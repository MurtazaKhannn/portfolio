import React from 'react'
import ExpCard from './ExpCard'
import allExp from '../assets/myExp'
import { motion } from 'framer-motion'

const Exp = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center p-6 gap-20 flex flex-wrap min-h-screen p-5 bg-black text-white'>
      <h1 className='font-danfo text-4xl hover:text-blue-600'>EXPERIENCE</h1>
      <div className='font-bebas flex flex-wrap items-center justify-center p-6 gap-20'>
        {allExp.map((data , index) => {
          return <ExpCard key={index} img={data.Img} name={data.name} Experience={data.Experience} Proof={data.Proof} Position={data.Position}/>
        })}
      </div>
      
    </div>
  )
}

export default Exp
