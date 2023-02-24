import axios from "axios";

//Buscando informações gerais
export const GetApi = axios.create({
    baseURL: 'https://api.github.com/users/GaaraSan01'
})

//Buscando informações dos Repositórios
export const GetProjects = axios.create({
    baseURL: 'https://api.github.com/users/GaaraSan01/repos'
})