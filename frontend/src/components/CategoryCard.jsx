import React, { useState } from 'react'
import { Stack, Typography } from '@mui/material'
import CategoryImage from '../assets/images/logo.png'
const CategoryCard = ({item, category, setCategory}) => {
    
  return (
    <Stack type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={category === item ? { borderTop: '4px solid #FF2625', background: '#defcf2', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#defcf2', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setCategory(item)
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}>
        <img src={CategoryImage} alt={item} style={{ width: '40px', height: '40px' }} />
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default CategoryCard
