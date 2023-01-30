import { Axios } from '../axios'

export const getUserInfo = async () => await Axios.get('api/v1/user')
