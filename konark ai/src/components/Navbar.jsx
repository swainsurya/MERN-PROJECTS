import { Drawer, IconButton, Stack, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import React, { useState } from 'react'

const Navbar = () => {
    
    return (
        <Stack direction={"row"} width={"100%"} alignItems={"center"} justifyContent={"space-between"} px={1}>
            <Typography variant='body2' sx={{ color: "#fff", fontWeight: "bold", fontSize: "20px",cursor:"pointer" }}>
                KONARK AI
            </Typography>
            <IconButton onClick={e =>{
                let ele = document.querySelector(".open_drawer");
                ele.style.width = "60%";
                ele.style.visibility = "visible"
            }}>
                <Menu sx={{ color: "#fff", height: "30px", width: "30px" }} />
            </IconButton>
        </Stack>
    )
}

export default Navbar
