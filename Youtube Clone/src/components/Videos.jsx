import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCart from './VideoCart'

const Videos = ({video}) => {
  return (
    <Stack
    direction={"row"}
    flexWrap={"wrap"}
    justifyContent={"start"}
    gap={2}
    >
        {
            video.map((item,idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCart video={item} />}
                </Box>
            ))
        }
    </Stack>
  )
}

export default Videos