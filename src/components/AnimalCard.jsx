import React from 'react';
import { Tilt } from 'react-tilt';


const AnimalCard = ({ name, image, category, diet }) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  // console.log(imageUrl)
  return (
    <Tilt className='w-1/5 '>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="flex justify-evenly items-center flex-col green-pink-gradient rounded-[20px] shadow-card m-5 p-2 cursor-pointer hover:scale-105 duration-300 ease-in-out"
      >
        <img src={image} alt={name} className='w-11/12 h-60  rounded-lg mx-auto my-2 border-4 border-[#defcf2]' />
        <div className='flex flex-row m-4 justify-evenly'>
          <button className="ml-5 text-white bg-pink-400 text-sm rounded-full px-5 py-2 capitalize">
            {category}
          </button>
          <button className={`ml-5 text-white text-sm rounded-full px-5 py-2 capitalize ${diet === 'Herbivore' ? 'bg-green-400' : (diet === 'Carnivore' ? 'bg-red-400' : 'bg-orange-400')}`}>
            {diet}
          </button>
        </div>
        <h3 className='text-white text-[20px] font-bold text-center'>{capitalize(name)}</h3>
      </div>
    </Tilt>
  );
};

export default AnimalCard;
