import {configureStore} from "@reduxjs/toolkit"
import UserReducer from "../slice/userSlice"

let store = configureStore(
    {
        reducer : UserReducer
    }
)

export default store