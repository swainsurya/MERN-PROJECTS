import { Paper, Skeleton, Stack } from '@mui/material'
import React from 'react'

const ImageBox = ({ imgScr, toggle, visible }) => {
  return (
    <Paper elevation={3} sx={{ width: "100%", position: "relative", height: "70%", bgcolor: "#5C5C5C", opacity: "0.7", borderRadius: "10px", visibility: visible ? "visible" : "hidden", textAlign: "center" }}>
      {
        imgScr === "" ? (
          <Skeleton variant='rounded' width={"100%"} height={"100%"} animation="wave" sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "25px",
          }}>
            Generating...
          </Skeleton>
        ) : (
          <img src={imgScr} style={{height:"100%", borderRadius: "10px" }} />
        )
      }
    </Paper>
  )
}

export default ImageBox
