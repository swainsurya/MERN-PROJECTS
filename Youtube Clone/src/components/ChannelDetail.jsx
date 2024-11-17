import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import { fetchAxios } from '../utils/FetchFromApi'
import { Avatar, Box, Stack, Typography } from '@mui/material'

const ChannelDetail = () => {
  let { id } = useParams()
  const [chVideos, setChVideos] = useState([])
  const [channelLogo, setChannelLogo] = useState("")
  const [channelName, setChannelName] = useState("")

  useEffect(() => {
    let getChannel = async () => {
      await fetchAxios(`channels?part=snippet&id=${id}`)
        .then(data => { setChannelLogo(data.items[0].snippet.thumbnails.high.url); setChannelName(data.items[0].snippet.localized.title) })
        .catch(err => console.log(err))
    }
    let getChannelVideos = async () => {
      await fetchAxios(`search?part=snippet&channelId=${id}&order=date`)
        .then(data => setChVideos(data.items))
        .catch(err => console.log(err))
    }
    getChannel()
    getChannelVideos()
  }, [id])

  useEffect(() => {
    let getChannel = async () => {
      await fetchAxios(`channels?part=snippet&id=${id}`)
        .then(data => { setChannelLogo(data.items[0].snippet.thumbnails.high.url); setChannelName(data.items[0].snippet.localized.title) })
        .catch(err => console.log(err))
    }
    let getChannelVideos = async () => {
      await fetchAxios(`search?part=snippet&channelId=${id}&order=date`)
        .then(data => setChVideos(data.items))
        .catch(err => console.log(err))
    }
    getChannel()
    getChannelVideos()
  }, [])
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div style={{
          background: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
          height: "300px",
          zIndex: 10,
        }} />

        <Stack alignItems={"center"} direction={"column"}>
          <Stack direction={"column"} alignItems={"center"} mt={"-98px"}>
            <Avatar src={channelLogo} sx={{ height: "120px", width: "120px" }} />
            <Typography variant='h5' sx={{
              color: "white"
            }}>
              {channelName}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box display={"flex"} mt={"10px"}>
        <Box sx={{mr : {xs : "20px", md:"80px", lg:"120px"}}} />
        <Videos video={chVideos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
