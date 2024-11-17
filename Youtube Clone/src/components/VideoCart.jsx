import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const VideoCart = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{
            width : {md : "300px" , xs : "90vw"},
            boxShadow : "none",
            borderRadius : "0"
        }}>
            <Link to={`/video/${videoId}`}>
                <CardMedia
                    alt={snippet?.title}
                    image={snippet?.thumbnails?.high?.url}
                    sx={{
                        width: "100%",
                        height: 180
                    }}
                />
            </Link>
            <CardContent
                sx={{
                    background: "#1e1e1e",
                    height: "106px"
                }}
            >
                <Link to={`/video/${videoId}`}>
                    <Typography variant='subtitle1' fontWeight={"bold"} color='#fff'>
                        {snippet?.title.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={`/channel/${snippet.channelId}`}>
                    <Typography variant='subtitle2' fontWeight={"bold"} color='gray' display={"flex"} alignItems={"center"}
                    >
                        {snippet?.channelTitle}
                        <CheckCircle sx={{ml : "5px" , fontSize: 20, color : "gray"}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCart
