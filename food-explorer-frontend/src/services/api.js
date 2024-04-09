import axios from "axios";

export const api = axios.create({
    baseURL: "https://food-explorer-7t9g.onrender.com",
    withCredentials: true
})