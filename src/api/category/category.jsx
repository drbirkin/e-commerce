import { Axios } from '../axios'

export const fetchMenu = async () => await Axios.get('api/v1/category/root')
