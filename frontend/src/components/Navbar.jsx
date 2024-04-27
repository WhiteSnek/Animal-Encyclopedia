import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import {motion} from 'framer-motion'
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" className='bg-transparent'>
      <Link to='/'>
      <img src={Logo} alt='logo' className='drop-shadow-lg cursor-pointer w-20 h-20 m-5' />
      </Link>
      <motion.div initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ staggerChildren: 0.1 }} className=' flex flex-row p-5 uppercase font-semibold text-3xl bebas-neue-regular'>
        <motion.button whileHover={{scale: 1.2}} transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }}><NavLink to="/" className={({isActive})=>`block mx-10 duration-200 ${isActive? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Home</NavLink></motion.button>
        <motion.button whileHover={{scale: 1.2}} transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }}><NavLink to="/collections" className={({isActive})=>`block mx-10 duration-200 ${isActive? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Collections</NavLink></motion.button>
        <motion.button whileHover={{scale: 1.2}} transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }}><NavLink to="/about" className={({isActive})=>`block mx-10 duration-200 ${isActive? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>About</NavLink></motion.button>
        <motion.button whileHover={{scale: 1.2}} transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }}><NavLink to="/blog" className={({isActive})=>`block mx-10 duration-200 ${isActive? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Blog</NavLink></motion.button>
      </motion.div>
    </Stack>
  )
}

export default Navbar
