import axios from "axios";

let apikey = import.meta.env.VITE_RAPID_API_KEY


let Base_url = "https://youtube-v31.p.rapidapi.com"

const options = {
  url: Base_url,
  params: {
    maxResults: '100'
  },
  headers: {
    'x-rapidapi-key': apikey,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchAxios = async(url) => {
    const res = await axios.get(`${Base_url}/${url}`,options)
    return res.data
}