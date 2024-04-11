import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api-cadastro-cliente-roan.vercel.app/api/',
    // baseURL: 'https://api-cadastro-cliente.vercel.app/api/',
})
