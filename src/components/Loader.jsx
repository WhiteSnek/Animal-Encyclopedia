import React from 'react'
import { Wave } from 'react-animated-text'
const Loader = () => {
  return (
    <div className='flex justify-center mb-1 p-2 w-full text-black text-2xl'>
      <Wave text="LOADING DATA" effect="fadeOut" effectChange={1.0} />
    </div>
  )
}

export default Loader
