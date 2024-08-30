import axios from "axios";

export const Api = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/'
})