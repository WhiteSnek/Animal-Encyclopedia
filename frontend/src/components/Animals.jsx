import React from 'react';
import AnimalCard from './AnimalCard';
import {animals} from '../constants';

const Animals = ({animal,setAnimal}) => {
  const animalArray = animal.length > 0 ? animal : animals;
  return (
    <div className='flex flex-wrap justify-center pt-20'>
      {animalArray.map((animal,index) => (
        <AnimalCard
          key={animal.id}
          id={animal.id}
          name={animal.name}
          frontImage={animal.frontImageUrl}
          backImage = {animal.backImageUrl}
          category={animal.category}
          diet = {animal.diet}
        />
      ))}
    </div>
  );
};

export default Animals;
