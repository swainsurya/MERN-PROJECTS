import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton, Input } from '@mui/material'
import { Search } from "@mui/icons-material"

const SearchBar = () => {
    const [term , setTerm] = useState("");
    let navigate = useNavigate()
    let handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${term}`)
        setTerm("")
    }
    return (
        <Paper
            onSubmit={handleSearch}
            component={"form"}
            sx={{
                borderRadius: 15,
                border: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: "none",
                mr: { sm: 5 }
            }}
        >
            <Input
                type="text"
                className='search-bar'
                placeholder='search...'
                value={term}
                onChange={(e) => {setTerm(e.target.value)}}
                sx={{
                    textDecoration : "none",
                    border : "0"
                }}
            />
            <IconButton
            type='submit'
            sx={{
                p : "8px",
                color : "red"
            }}
            >
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar
