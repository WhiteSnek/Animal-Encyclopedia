import React from 'react'
import {motion} from 'framer-motion'
const FunFact = ({image,animalDetail}) => {
  return (
    <div className=' mt-40 flex justify-between items-center'>
        <motion.div whileInView={{ x: 100 }} className=' text-black'>
        <h1 className='text-7xl font-bold'>Fun facts about {animalDetail.name}</h1>
        <p className='text-3xl mt-10 font-semibold'>{animalDetail.funFacts}</p>
        </motion.div>
        <motion.div whileInView={{ x: -100 }} className='ml-48'>
        <img src={image} alt={animalDetail.name} className="w-auto max-h-[500px]" />
        </motion.div>
        
    </div>
  )
}

export default FunFact
