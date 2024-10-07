import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    userInfo : {
        userId : "",
        name : "",
        status : false
    }
}

let userSlice = createSlice(
    {
        name:"user",
        initialState : initialState,
        reducers: {
            setName : (state,action) => {
                state.userInfo.name = action.payload
            },
            setStatus : (state,action) => {
                state.userInfo.status = action.payload
            },
            setUserid : (state , action) => {
                state.userInfo.userId = action.payload
            }
        }
    }
)

export const {setName , setStatus , setUserid} = userSlice.actions
export default userSlice.reducer    