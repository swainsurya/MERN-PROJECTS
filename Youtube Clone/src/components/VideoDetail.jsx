import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAxios } from '../utils/FetchFromApi'
import ReactPlayer from "react-player"
import { Box, Stack, Typography } from '@mui/material'

const VideoDetail = () => {
  let {id} = useParams()
  let [videoDetail , setVideoDetail] = useState({})
  useEffect(() => {
    let getVideo = async() => {
      await fetchAxios(`videos?part=snippet&id=${id}`)
      .then(data => {setVideoDetail(data.items[0].snippet) ; console.log(videoDetail)})
      .catch(err => console.log(err))
    }
    getVideo()
  },[id])

  useEffect(() => {
    let getVideo = async() => {
      await fetchAxios(`videos?part=snippet&id=${id}`)
      .then(data => {setVideoDetail(data.items[0].snippet) ; console.log(videoDetail)})
      .catch(err => console.log(err))
    }
    getVideo()
  },[])
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{xs : "column" , md : "row"}}>
        <Box flex={1}>
          <Box sx={{width : "100%" , position : "sticky" , top : "86px"}}>
            <ReactPlayer className="react-player" url={`https://www.youtube.com/watch?v=${id}`} controls/>
            <Typography>
              {/* {videoDetail.snippet.title} */}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
