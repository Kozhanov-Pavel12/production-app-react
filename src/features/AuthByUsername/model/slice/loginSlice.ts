import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: ''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    
    // Первый редюсер - меняем юзера
    setUsername: (state, action: PayloadAction<string>) => {
        state.username = action.payload
    },

    // Второй редюсер - меняем пароль
    setPassword: (state, action: PayloadAction<string>) => {
        state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(loginByUsername.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        .addCase(loginByUsername.fulfilled, (state, { payload }) => {
            state.isLoading = false
        })
        .addCase(loginByUsername.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        })
    },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
