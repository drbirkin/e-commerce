import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProduct } from '../../api/product/product'

export const fetchProductAsync = createAsyncThunk(
  'product/fetchProductAsync',
  async (Product) => {
    const { slug, filterOptions } = Product
    const response = await getProduct(slug, filterOptions)
    // console.log('product: ', response.data)
    return response.data.document
  }
)
