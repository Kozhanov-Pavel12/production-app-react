import { fetchProfileData } from './fetchProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const data = {
    username: 'Username',
    first: 'First',
    lastname: 'Lastname',
    age: 24,
    city: 'Krasnoyarsk',
    country: Country.Russia,
    currency: Currency.RUB,
}

describe('fetchProfileData', () => {
    // 2 СПОСОБ
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve( { data: data } ) )
        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('rejected', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve( { status: 403 } ) )
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
