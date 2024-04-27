import React from 'react'
import {delay, motion, spring} from 'framer-motion'
const AnimalDescription = ({ animalDetail }) => {
    const defaultAnimations = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    }
  return (
    <motion.div initial="initial" whileInView="animate" transition= {{staggerChildren: 0.1}} aria-hidden>
      <div className='text-7xl font-bold text-black ml-40 mt-40'>{animalDetail.name.split("").map((char)=>(<motion.span variants={defaultAnimations}  className='inline-block'>{char}</motion.span>))}</div>
      <motion.div initial={{x:50}} whileInView={{x:0}} transition={spring} className='text-xl mt-10 font-medium text-black mx-40'>{animalDetail.description}</motion.div>
    </motion.div>
  )
}

export default AnimalDescription
