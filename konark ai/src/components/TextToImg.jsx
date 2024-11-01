import { Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ImageBox from './ImageBox'
import InputBox from './InputBox'
import { fetchImg } from '../utils/fetchImg'

const TextToImg = () => {
  const [val, setVal] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [toggle, setToggle] = useState(false)
  const [visible, setvisible] = useState(false)
  let handleVal = async (e) => {
    setImgUrl("")
    e.preventDefault();
    await fetchImg(val)
      .then(res => setImgUrl(URL.createObjectURL(res)))
      .catch(err => console.log(err))
      .finally(() => {
        setToggle(!toggle)
        setvisible(true)
        setVal("")
      })
  }
  let handleDownload = () => {
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = imgUrl;
    link.click()
    link.remove()
  }
  return (
    <Stack height={"70%"} width={"100%"} direction={"column"} justifyContent={"space-between"} gap={"20px"}>
      <Stack direction={"column"} alignItems={"center"} height={"90%"} gap={"10px"}>
        <Button onClick={handleDownload} role='button' sx={{ backgroundColor: "red", padding: "10px", color: "#fff", visibility: imgUrl == "" ? "hidden" : "visible" }}>Download</Button>
        <ImageBox imgScr={imgUrl} toggle={toggle} visible={visible} />
      </Stack>
      <InputBox val={val} setVal={setVal} handleVal={handleVal} />
    </Stack>
  )
}


export default TextToImg
