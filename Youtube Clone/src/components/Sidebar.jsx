import React from 'react'
import { categories } from '../utils/constants'
import { Stack } from '@mui/material'

const Sidebar = ({selctedCategory , setSelectedCategory}) => {
  return (
    <Stack
    direction={"row"}
    sx={{
        overflowY : "auto",
        height : {sx : "auto" , md : "95%"},
        flexDirection : { md : "column"}
    }}
    >
        {
            categories.map((category) => (
                <button 
                onClick={e=>{setSelectedCategory(category.name)}}
                className='category-btn'
                key={category.name}
                style={{
                    border : 'none',
                    background : category.name === selctedCategory && "#FC1503",
                    color : '#fff',
                    marginTop : '0.3rem',
                    marginBottom : '0.3rem'
                }}
                >
                    <span
                    style={{
                        color : category.name === selctedCategory? "white":"red",
                        marginRight : "15px"
                    }}
                    >{category.icon}</span>
                    <span
                    style={{
                        opacity : category.name === selctedCategory ? "1" : "0.75"
                    }}
                    >{category.name}</span>
                </button>
            ))
        }
    </Stack>
  )
}

export default Sidebar
