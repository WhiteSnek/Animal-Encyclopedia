import React from 'react'

const DetailBanner = ({name, image}) => {
  return (
    <div>
        <img src={image} alt={name} className="w-full h-80 object-cover z-[-1] absolute top-0"/>
        <h1  className='bebas-neue-regular w-[50%] text-9xl mt-10 ml-20 drop-shadow-lg'>
    {name}
    </h1>
    </div>
  )
}

export default DetailBanner
