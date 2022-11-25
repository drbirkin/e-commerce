import { createSlice } from '@reduxjs/toolkit'
import { fetchPagesAsync } from './page.action'

const INITIAL_STATE = {
  page: {},
  status: '',
  error: null,
}

export const pageSlice = createSlice({
  name: 'page',
  initialState: INITIAL_STATE,
  reducers: {
    fetchPage(state = INITIAL_STATE, action = {}) {
      return { ...state, page: action.payload }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPagesAsync.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPagesAsync.fulfilled, (state, action) => {
        state.page = action.payload

        if (state.page.data) state.status = 'success'
        else state.status = 'idle'
      })
      .addCase(fetchPagesAsync.rejected, (state, action) => {
        state.error = action.error.message
        state.status = 'failed'
      })
  },
})

export const { fetchPage } = pageSlice.actions
export default pageSlice.reducer
