import React, { useState } from 'react'
import { Box, Container, Stack } from "@mui/material"
import Navbar from './components/Navbar'
import NavDrawer from './components/NavDrawer'
import TextToImg from './components/TextToImg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ImgToText from './components/ImgToText'

const App = () => {
  return (
    <Box className="itim-regular" sx={{ margin: "0", padding: "0", boxSizing: "border-box" }}>
      <Container maxWidth={"sm"} sx={{ padding: "0" }}>
        <Box id="main_box" sx={{ bgcolor: "#1B1B1B", height: "100vh", width: "100%", }}>
          <Stack direction={"column"} position={"relative"} justifyContent={"space-between"} alignItems={"center"} width={"100%"} height={"100%"}
            padding={3}>
            <BrowserRouter>
            <Navbar />
            <NavDrawer />
              <Routes>
                <Route path='/' element={<TextToImg />} />
                <Route path='/next' element={<ImgToText />} />
              </Routes>
            </BrowserRouter>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default App
