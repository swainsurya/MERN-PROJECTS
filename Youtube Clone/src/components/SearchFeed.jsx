import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import { fetchAxios } from '../utils/FetchFromApi'
import { Box, Typography } from '@mui/material'

const SearchFeed = () => {
  let {searchTerm} = useParams();
  const [searchedVideos , setSearchedVideos] = useState([]);

  useEffect(() => {
    let getSearchedVideos = async() => {
      await fetchAxios(`search?q=${searchTerm}&part=snippet`)
      .then(data => setSearchedVideos(data.items))
      .catch(err => console.log(err))
    }
    getSearchedVideos()
  },[])

  return (
    <Box p={2} sx={{
      overflowY : "auto",
      height : "90vh",
      flex : 2
    }}>
      <Typography variant='h5' sx={{color : 'white'}}>
        Search Result for <span style={{color : "#F31503"}}>{searchTerm}</span> Videos
      </Typography>
      <Box display={"flex"} mt={"10px"}>
        <Box sx={{mr : {xs : "0px", md:"95px", lg:"120px"}}} />
        <Videos video={searchedVideos} />
      </Box>
    </Box>
  )
}

export default SearchFeed
