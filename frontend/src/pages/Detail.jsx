import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailBanner from '../components/DetailBanner';
import { animals, animalDetails } from '../constants';
import FunFact from '../components/FunFact';
import AnimalDescription from '../components/AnimalDescription';
import ImageGallary from '../components/ImageGallary';
import Loader from '../components/Loader';

const Detail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const animal = animals[id - 1];
  const animalDetail = animalDetails[id - 1];

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await fetch(`/api?query=${animal.name}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data from Pexels API');
        }
        const resData = await response.json();
        // console.log(resData.photos.map(photo => photo.src.medium));
        setData(resData.photos.map(photo => photo.src.medium));
      } catch (error) {
        console.error('Error fetching data:', error.message);
        // Handle error (e.g., display error message to the user)
      }
    };
    getPhotos();
    console.log(data[0])
    window.scrollTo(0, 0);
  }, [animal.name]);
  return (
    <>
      <DetailBanner image={animal.backImageUrl} name={animal.name} />
      <AnimalDescription animalDetail={animalDetail}/>
      {data.length > 0 ? <ImageGallary images={data}/> : <Loader/>}
      <FunFact image={animal.frontImageUrl} animalDetail={animalDetail} />
    </>
  );
};

export default Detail;
