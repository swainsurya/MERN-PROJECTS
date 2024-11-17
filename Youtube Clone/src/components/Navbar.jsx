import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between"
      }}
    >
      <Link
        to={"/"}
        style={{
          display : "flex",
          alignItems : "center"
        }}
      >
        <img src={logo} height={45} alt='logo'/>
        <Typography variant='h4' sx={{color : "white",fontWeight : "bold",display:{xs:"none",md : "block"}}}>SuryaTube</Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
