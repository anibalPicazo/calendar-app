import axios from "axios";
import { getEnv } from "../helpers/getEnv";

const { VITE_API_URL } = getEnv()
console.log(VITE_API_URL);
const  calendarApi = axios.create({
    baseURL: VITE_API_URL
})
calendarApi.interceptors.request.use(config =>{
    config.headers= {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config
})

export default calendarApi