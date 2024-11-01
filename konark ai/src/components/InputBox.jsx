import { IconButton, Paper } from '@mui/material'
import { Send } from '@mui/icons-material'
import React, { } from 'react'

const InputBox = ({val , setVal , handleVal}) => {
  return (
    <Paper elevation={3} component={"form"} onSubmit={handleVal} sx={{width : "100%" , height : "42px", bgcolor : "#2D2D2D", borderRadius : "10px", position : "relative"}}>
      <input value={val} onChange={e=>setVal(e.target.value)} type="text" placeholder='Enter Prompt...' style={{
        backgroundColor : "transparent",
        width : "100%",
        height : "100%",
        outline : "none",
        border : "0",
        paddingLeft : "10px",
        color : "#fff"
      }}/>
      <IconButton type='submit' sx={{position : "absolute" , right : "0"}}>
        <Send sx={{color : "#fff", opacity : "0.4"}}/>
      </IconButton>
    </Paper>
  )
}

export default InputBox
