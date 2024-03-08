import React from 'react'
import HeroBanner from '../components/HeroBanner'
const Home = () => {
  return (
    <>
    <HeroBanner /> 
    <div className="absolute top-[100%] w-[100%] bg-black" >
        <h1 className="text-white text-4xl">Your Text Here</h1>
        <p className="text-white">Your description here</p>
        <p className="text-white">Your description here</p>
        <p className="text-white">Your description here</p>
        <p className="text-white">Your description here</p>
        <p className="text-white">Your description here</p>
        <p className="text-white">Your description here</p>
        <p className="text-white">Your description here</p>
        <p className="text-white">Your description here</p>
      </div>
    </>
  )
}

export default Home
