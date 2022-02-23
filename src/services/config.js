import Axios from "axios";

export const http = axios.create({
    baseURL: 'http://localhost:8080/api'
})