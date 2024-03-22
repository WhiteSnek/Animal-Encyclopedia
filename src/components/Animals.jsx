import React from 'react';
import AnimalCard from './AnimalCard';
import animals from '../constants';

const Animals = ({animal,setAnimal}) => {
  const animalArray = animal.length > 0 ? animal : Object.values(animals);
  return (
    <div className='flex flex-wrap justify-center pt-20'>
      {animalArray.map((animal) => (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          image={animal.imageUrl}
          category={animal.category}
          diet = {animal.diet}
        />
      ))}
    </div>
  );
};

export default Animals;
