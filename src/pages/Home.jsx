import React, {useState} from 'react'
import HeroBanner from '../components/HeroBanner'
import Search from '../components/Search'
import Animals from '../components/Animals'
import Loader from '../components/Loader'
import KiryuCard from '../components/KiryuCard'
const Home = () => {
  const [animal,setAnimal] = useState([])
  return (
    <>
    <HeroBanner /> 
    <Search setAnimal={setAnimal} />
    <Animals animal={animal} setAnimal={setAnimal}/>
    <Loader />
    <KiryuCard />
    </>
  )
}

export default Home
