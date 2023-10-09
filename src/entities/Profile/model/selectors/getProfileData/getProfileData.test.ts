import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileData', () => {
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
                data: data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
