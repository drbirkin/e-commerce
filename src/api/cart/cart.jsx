import { Axios } from '../axios'

export const getCart = async () => Axios.get('api/v1/checkout')
export const addToCart = async (name, variant, quantity) =>
  Axios.post(
    `api/v1/products/item/${name}?variant=${variant}`,
    JSON.stringify({ quantity: quantity })
  )
