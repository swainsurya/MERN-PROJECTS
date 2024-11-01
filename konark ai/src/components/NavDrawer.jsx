import { GitHub, Image, Info, PortableWifiOffOutlined } from '@mui/icons-material';
import { Button, IconButton, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { closeDrawer } from '../utils/closeDrawer';

const NavDrawer = () => {
    let navigate = useNavigate()
    return (
        <Stack className='open_drawer' direction={"column"} sx={{ overflowX:"hidden ", width: "0", visibility: "hidden", height: "100%",textAlign:"center", position: "absolute", right: "0", bgcolor: "#030B15", opacity: "0.89", transition: "0.6s", zIndex: "1", top: "0" }}>
            <Button sx={{fontSize : "50px", mr:"150px"}} onClick={e => closeDrawer()}>&times;</Button>
            <Stack direction={"column"} height={"90%"} alignItems={"flex-start"} pl={"15px"} gap={"21px"} mt={"20px"} position={"relative"}>
                <IconButton onClick={e => {navigate("/"); closeDrawer()}} sx={{display : "flex",flexDirection : "row", alignItems : "center", gap:"5px"}}>
                    <Image sx={{color : "#FF1AC5", fontSize : "20px"}} />
                    <span style={{textTransform : "uppercase", color : "#fff", fontWeight : "bold", fontSize : "20px"}}>Text to Img</span>
                </IconButton>
                <IconButton onClick={e => {navigate("/next"); closeDrawer()}} sx={{display : "flex",flexDirection : "row", alignItems : "center", gap:"5px"}}>
                    <PortableWifiOffOutlined sx={{color : "#FF1AC5", fontSize : "20px"}} />
                    <span style={{textTransform : "uppercase", color : "#fff", fontWeight : "bold", fontSize : "20px"}}>Img to text</span>
                </IconButton>
                <IconButton sx={{display : "flex",flexDirection : "row", alignItems : "center", gap:"5px"}}>
                    <Info sx={{color : "#FF1AC5", fontSize : "20px"}} />
                    <span style={{textTransform : "uppercase", color : "#fff", fontWeight : "bold", fontSize : "20px"}}>about</span>
                </IconButton>
                <IconButton sx={{display : "flex",flexDirection : "row", alignItems : "center", gap:"5px"}}>
                    <GitHub sx={{color : "#FF1AC5", fontSize : "20px"}} />
                    <span style={{textTransform : "uppercase", color : "#fff", fontWeight : "bold", fontSize : "20px"}}>Github</span>
                </IconButton>
            <span style={{color : "#fff", marginTop : "270px", position:"absolute", bottom : "10px",marginLeft:"60px"}}>&copy; konark ai</span>
            </Stack>
        </Stack>
    )
}

export default NavDrawer
