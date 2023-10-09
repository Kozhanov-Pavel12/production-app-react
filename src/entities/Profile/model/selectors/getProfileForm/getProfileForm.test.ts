import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileForm', () => {
    test('should return data', () => {

        const data = {
            username: 'Username',
            first: 'First',
            lastname: 'Lastname',
            age: 24,
            city: 'Krasnoyarsk',
            country: Country.Russia,
            currency: Currency.RUB,
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
