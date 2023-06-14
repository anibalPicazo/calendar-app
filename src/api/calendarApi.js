import axios from "axios";
import { getEnv } from "../helpers/getEnv";

const { VITE_API_URL } = getEnv()
console.log(VITE_API_URL);
const  calendarApi = axios.create({
    baseURL: VITE_API_URL
})

export default calendarApi