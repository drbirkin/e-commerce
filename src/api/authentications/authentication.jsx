import axios from 'axios'

export const loginApi = axios.create({
  baseURL: 'http://localhost:3500/',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})
