import React, {useState} from 'react'
import {Box,TextField,Button, Typography} from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
const Search = () => {
    const [search,setSearch] = useState('')
    const handleSearch = () =>{
    setSearch('')
  }
  return (
    <>
    <Box className="ml-24 pt-20">
        <Typography variant='h2' sx={{color:'#000', paddingBottom: '20px'}}>Search an Animal!</Typography>
      <TextField id='outlined-search' type="search" label='Search' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} height="76px" sx={{ input: { fontWeight: '700', border: 'none',borderRadius: '4px' }, width: { lg: '1000px', xs: '350px',}}} />
      <Button className='search-btn' sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px',fontSize: { lg: '20px', xs: '14px' }}} onClick={handleSearch}>Search</Button>
      <Box sx={{ position: 'relative', width: '100%', pt: '80px' }}>
        <HorizontalScrollBar/>
    </Box>
    </Box>
   
    </>
  )
}

export default Search
