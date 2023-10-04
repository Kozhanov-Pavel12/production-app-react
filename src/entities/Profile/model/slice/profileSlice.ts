import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
