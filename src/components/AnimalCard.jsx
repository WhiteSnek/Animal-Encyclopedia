import React from 'react'
import { Tilt } from 'react-tilt'

const AnimalCard = ({name}) => {

  return (
    <Tilt className='w-[250px]'>
      <div className='green-pink-gradient p-[1px] rounded-[20px] shadow-card m-5'>
      <div options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-green-500 rounded-[20px] py-5 px-12 m-1 min-h-[280px] flex justify-evenly items-center flex-col">
              <h3 className='text-black text-[20px] font-bold text-center'>{name}</h3>
      </div>
      </div>
    </Tilt>
  )
}

export default AnimalCard
