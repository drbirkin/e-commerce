import { Axios } from '../axios'

export const getPage = async (type, layoutId = null) =>
  Axios.get(`api/v1/component/${type}`, JSON.stringify({ layoutId: layoutId }))
