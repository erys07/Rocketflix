import axios from "axios";

console.log(import.meta.env)

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {api_key: import.meta.env.VITE_MOVIEDB_API_KEY}
})

export default api;