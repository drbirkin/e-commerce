import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchMenu } from '../../api/category/category'

export const fetchCategoryAsync = createAsyncThunk(
  'category/fetchCategoryAsync',
  async () => {
    const Menu = await fetchMenu()
    console.log(Menu)
    return Menu.data
  }
)
