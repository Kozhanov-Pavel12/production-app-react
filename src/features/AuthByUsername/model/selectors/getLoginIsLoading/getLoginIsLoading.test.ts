import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading', () => {
    test('should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should return isLoading false', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })
})
