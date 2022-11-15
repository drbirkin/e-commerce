import { Axios } from '../axios'

export const loginUser = async (username, password, rememeber) =>
  await Axios.post(
    'api/v1/users/login',
    JSON.stringify({ username, password, rememeber })
  )

export const logoutUser = async () => await Axios.get('api/v1/users/logout')
