import React from 'react'
import AnimalCard from './AnimalCard'

const Animals = () => {
  const names = [
    "lion",
    "tiger",
    "elephant",
    "zebra",
    "giraffe",
    "monkey",
    "panda",
    "koala",
    "bear",
    "wolf"
  ];
  return (
    <div className='flex flex-wrap justify-center pt-20' >
      {names.map((name)=>(
        <AnimalCard name={name} />
      ))}
      
    </div>
  )
}

export default Animals
