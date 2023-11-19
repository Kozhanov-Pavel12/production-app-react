import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { fetchArticleById } from '../service/fetchArticleById/fetchArticleById'
import { Article } from '../types/article'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchArticleById.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false
            state.data = action.payload
        })
        .addCase(fetchArticleById.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        })
    },
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
