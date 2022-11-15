import axios from 'axios'

export const Axios = axios.create({
  baseURL: 'http://localhost:3500/',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})
