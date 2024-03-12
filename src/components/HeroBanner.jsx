import React, { useState } from 'react'
import backgroundVideo from '../assets/videos/bg-video.mp4'
import Typed from 'typed.js';
const HeroBanner = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Your Ultimate Guide to Nature's Marvels!"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
    <div>
      <video autoPlay loop muted id='video'>
      <source src={backgroundVideo} type='video/mp4' />
    </video>
    </div>
    <div>
    <h1  className='bebas-neue-regular w-[50%] text-9xl mt-10 ml-20 drop-shadow-lg'>
    Discover the Wonders of the Animal Kingdom:
    </h1>
    <h1  className='bebas-neue-regular w-[50%] text-6xl ml-20 text-lime-200 drop-shadow-lg' ref={el} />
    </div>
    </>
  )
}

export default HeroBanner
