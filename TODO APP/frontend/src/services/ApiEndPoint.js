import axios from "axios"

const instance = axios.create({
    baseURL : "http://localhost:3000",
    headers : {
        "Content-Type" : "application/json"
    },
    withCredentials : true
})

export const getTodo= (url,params) => instance.get(url,{params})
export const postTodo= (url,data) => instance.post(url,data)
export const delTodo= (url) => instance.delete(url)