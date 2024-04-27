import React, {useState} from 'react'
import HeroBanner from '../components/HeroBanner'
import Search from '../components/Search'
import Animals from '../components/Animals'
const Home = () => {
  const [animal,setAnimal] = useState([])
  return (
    <>
    <HeroBanner /> 
    <Search setAnimal={setAnimal} />
    <Animals animal={animal} setAnimal={setAnimal}/>
    </>
  )
}

export default Home
