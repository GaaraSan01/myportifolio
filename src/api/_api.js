import axios from "axios";

export const GetApi = axios.create({
    baseURL: 'https://api.github.com/users/GaaraSan01'
})

export const GetProjects = axios.create({
    baseURL: 'https://api.github.com/users/GaaraSan01/repos'
})