import React from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const AnimalCard = ({ name, frontImage, backImage, category, diet,id }) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.5 }} className="animal-card cursor-pointer">
        <Link to={`/details/${id}`}>
        <div className='logo'>
          <h1 className='font-extrabold'>{name}</h1>
          <div className='flex flex-row m-4 justify-evenly'>
          <button className=" text-white bg-pink-400 text-sm rounded-full px-5 py-2 capitalize">
            {category}
          </button>
          <button className={`ml-5 text-white text-sm rounded-full px-5 py-2 capitalize 
          ${diet === 'Herbivore' ? 'bg-green-400' : (diet === 'Carnivore' ? 'bg-red-400' : 'bg-orange-400')}`}>
            {diet}
          </button>
        </div>
          </div>
        
        <img
          src={frontImage}
          alt=""
          className="front-image"
        />
        <img
          src={backImage}
          alt=""
          className="bg-image"
        />
        </Link>
      </motion.div>
  );
};

export default AnimalCard;
