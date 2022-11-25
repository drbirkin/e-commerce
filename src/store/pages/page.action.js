import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPage } from '../../api/page/page'

export const fetchPagesAsync = createAsyncThunk(
  'page/fetchPagesAsync',
  async (Page) => {
    const { type, layoutId } = Page
    const response = await getPage(type, layoutId)
    return response.data
  }
)
