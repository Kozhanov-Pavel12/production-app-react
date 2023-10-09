import { validateProfileData } from './validateProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from '../../types/profile'

const data = {
    username: 'Username',
    first: 'First',
    lastname: 'Lastname',
    age: 24,
    city: 'Krasnoyarsk',
    country: Country.Russia,
    currency: Currency.RUB,
}

describe('validateProfileData', () => {
    // 2 СПОСОБ
    test('success', async () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('without first and last name', async () => {
        const result = validateProfileData({...data, first: '', lastname: ''})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])
    })

    test('incorrect age', async () => {
        const result = validateProfileData({...data, age: undefined})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE
        ])
    })

    test('without country', async () => {
        const result = validateProfileData({...data, country: undefined})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY
        ])
    })

    test('all empty', async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ])
    })
})
