import { Typography, Box } from '@mui/material'
import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import LeftArrowIcon from '../assets/images/left-arrow.png'
import RightArrowIcon from '../assets/images/right-arrow.png'
import CategoryCard from './CategoryCard'
const data = [
    "Mammals",
    "Reptiles",
    "Amphibians",
    "Birds",
    "Fish",
    "Invertebrates",
    "Arthropods",
    "Insects",
    "Mollusks",
    "Echinoderms",
    "Annelids",
    "Cnidarians",
    "Platyhelminthes",
    "Nematodes",
    "Porifera",
    "Chordates",
    "Vertebrates",
    "Invertebrates"
]
const LeftArrow = () => {

    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
  };
  
  const HorizontalScrollBar = () => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} scrollContainerClassName='react-horizontal-scrolling-menu--wrapper'>
      {data.map((item,index) => (
        <CategoryCard
          item={item}
          key={index}
        />
      ))}
    </ScrollMenu>
    )
  }
  export default HorizontalScrollBar