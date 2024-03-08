import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" className='bg-transparent'>
      <Stack>
      <img src={Logo} alt='logo' className='drop-shadow-lg cursor-pointer w-20 h-20 m-5' />
      </Stack>
      <Stack direction="row" alignItems="center" className=' p-5 uppercase font-semibold text-white text-lg'>
        <NavLink to="/" className={({isActive})=>`block mx-10 duration-200 ${isActive? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Home</NavLink>
        <NavLink to="/collections" className={({isActive})=>`block mx-10 duration-200 ${isActive? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Collections</NavLink>
        <NavLink to="/about" className={({isActive})=>`block mx-10 duration-200 ${isActive? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>About</NavLink>
        <NavLink to="/blog" className={({isActive})=>`block mx-10 duration-200 ${isActive? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Blog</NavLink>
      </Stack>
    </Stack>
  )
}

export default Navbar
