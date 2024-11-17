import React from 'react'
import { useState , useEffect } from 'react'
import { Box , selectClasses, Stack , Typography } from '@mui/material'
import {Sidebar , Videos} from "../components"
import { fetchAxios } from '../utils/FetchFromApi'

const Feed = () => {
  const [selectedCategory , setSelectedCategory] = useState("New");
  const [videos , setVideos] = useState([]);
  useEffect(() => {
    let getYtVideos = async() => {
      await fetchAxios(`search?part=snippet&q=${selectedCategory}`)
      .then(res => setVideos(res.items))
      .catch(err => {})
    }
    getYtVideos()
  } , [selectedCategory])
  return (
    <Stack
    sx={{
      flexDirection : {sx : "column" , md : "row"}
    }}
    >
      <Box
      sx={{
        height : {sx : "auto" , md : "92vh"},
        borderRight : "1px solid #3d3d3d",
        px : { sx : "0" , md : 2}
      }}
      >
        {/* Sidebar */}
        <Sidebar selctedCategory={selectedCategory} setSelectedCategory = {setSelectedCategory} />
        <Typography
        variant='body2'
        sx={{
          mt : 1.5 ,
          color : "#fff",
          bottom : 0
        }}
        >
          Copyright 2025 Surya Tube
        </Typography>
      </Box>
      <Box
      p={2}
      sx={{
        overflowY: "auto",
        height : "90vh",
        flex  : 2
      }}
      >
          <Typography variant='h4' fontWeight={"bold"} mb={2} sx={{color : "white"}}>
            {selectedCategory}
            <span style={{color : "#F31503"}}> Videos</span>
          </Typography>
          <Videos video = {videos} />
        </Box>
    </Stack>
  )
}

export default Feed
