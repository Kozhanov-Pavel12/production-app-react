import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducer?: ReducersList) => (StoryComponent: StoryFn) => {
    return (
        <StoreProvider 
            initialState={state} 
            asyncReducers={{...defaultAsyncReducers, ...asyncReducer}}
        >
            <StoryComponent />
        </StoreProvider>
    )
}
