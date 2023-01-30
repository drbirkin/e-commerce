import { Axios } from '../axios'

export const getProduct = async (slug, filterOptions = null) => {
  let filter = ''
  for (const [key, value] of Object.entries(filterOptions)) {
    filter = filter ? `${filter}&${key}=${value}` : `${key}=${value}`
  }
  if (filter) return Axios.get(`api/v1/products/item/${slug}?${filter}`)
  else return Axios.get(`api/v1/products/item/${slug}`)
}
