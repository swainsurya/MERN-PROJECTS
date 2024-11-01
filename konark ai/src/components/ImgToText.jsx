import { Button, Input, Paper, Skeleton, Stack, TextareaAutosize, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchText } from '../utils/fetchImg'

const ImgToText = () => {
    const [photo , setPhoto] = useState()
    const [fs, setFs] = useState()
    const [aiTxt , setAiTxt] = useState("")
    const [load , setLoad] = useState(false)

    let generateClick = async(e) => {
        setAiTxt("")
        setLoad(true)
        await fetchText(fs)
        .then(data => setAiTxt(data[0].generated_text))
        .catch(err => setAiTxt("error"))
    }

  return (
    <Stack direction={"column"} alignItems={"center"} width={"100%"} height={"90%"} justifyContent={"space-around"}>
        <Paper sx={{width : "100%", height : "40%", bgcolor:"#5C5C5C",border:"none" , display : "flex",justifyContent: "center", alignItems:"center",flexDirection : "column", position:"relative"}} component={"form"}>
            <input onChange={e => {
                let imgUrl = URL.createObjectURL(e.target.files[0])
                setFs(e.target.files[0])
                setPhoto(imgUrl)
            }} type='file' placeholder='Select image' style={{height:"90%",width:"100%",textDecoration : "none", opacity:"0",position:"absolute",bottom : "0",left: "0"}} />
            <Typography variant='body1' sx={{fontWeight : "bold",textTransform:"uppercase", color:"#fff",position:"absolute",bottom: "45%",left : "30",visibility:photo?"hidden":"visible"}}>Choose Image</Typography>
            {
                photo?(
                    <img src={photo} alt="" height={"100%"} />
                ):""
            }
        </Paper>
        <Button onClick={generateClick} variant='contained' sx={{width:"109px",bgcolor:"#0BFF50",color : "#000",fontWeight:"bold"}}>Generate</Button>
        {
            aiTxt===""?(
                <Skeleton variant='rounded' width={"100%"} height={"100px"} animation="wave" sx={{color:"white",fontWeight:"bold",display : load?"flex":"none",alignItems : "center", justifyContent : "center"}}>
            {
                aiTxt=="error"?"Please try again": "Generating..."
            }
        </Skeleton>
            ):(
                <TextareaAutosize style={{ width : "100%",fontSize:"21px", backgroundColor:"black",borderRadius:"10px", color:"#FF1AC5", fontWeight : "bold",textTransform:"uppercase",padding:"10px",outline:"none",cursor:"pointer", textAlign : "center"}} value={aiTxt} readOnly/>
            )
        }
    </Stack>
  )
}

export default ImgToText
