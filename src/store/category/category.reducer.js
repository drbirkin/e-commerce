import { createSlice } from '@reduxjs/toolkit'
import { fetchCategoryAsync } from './category.action'

const INITIAL_STATE = {
  currentCategory: {},
  status: '',
  error: null,
  isDropdown: false,
}

const categorySlice = createSlice({
  name: 'category',
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategory(state, action = {}) {
      return { ...state, currentCategory: action.payload }
    },
    isCategoryDropdown(state, action = {}) {
      return { ...state, isDropdown: action.payload }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryAsync.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCategoryAsync.fulfilled, (state, action) => {
        state.currentCategory = action.payload
        const data = state.currentCategory.data
        console.log(data)
        state.status = data ? 'success' : 'idle'
        // console.log(state.currentUser)
      })
      .addCase(fetchCategoryAsync.rejected, (state, action) => {
        state.error = action.error.message
        state.status = 'failed'
      })
  },
})

export const { fetchCategory, isCategoryDropdown } = categorySlice.actions
export default categorySlice.reducer
