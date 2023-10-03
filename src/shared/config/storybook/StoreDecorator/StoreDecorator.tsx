import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>) => (StoryComponent: StoryFn) => {
    return (
        <StoreProvider 
            initialState={state} 
            asyncReducers={{...defaultAsyncReducers, ...asyncReducer}}
        >
            <StoryComponent />
        </StoreProvider>
    )
}
