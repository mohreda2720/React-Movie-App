import axios from 'axios'
const axiosConfig = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        "api_key": "bf8e473122f1208cdc7588ca7f4889b2"
    }
})

export default axiosConfig;