import React from 'react'
import backgroundVideo from '../assets/videos/bg-video.mp4'
const HeroBanner = () => {
  return (
    <div>
      <video autoPlay loop muted id='video'>
      <source src={backgroundVideo} type='video/mp4' />
    </video>
    </div>
  )
}

export default HeroBanner
