import { profileActions, profileReducer } from './profileSlice'
import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const data = {
    username: 'Username',
    first: 'First',
    lastname: 'Lastname',
    age: 24,
    city: 'Krasnoyarsk',
    country: Country.Russia,
    currency: Currency.RUB,
}

describe('profileSlice.test.ts', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true })
    })

    test('set cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' }}
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({ 
            readonly: true,
            validateErrors: undefined,
            data,
            form: data
        })
    })

    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' }}
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
            username: '12345'
        }))).toEqual({
            form: {
                username: '12345'
            }
        })
    })

    test('updateProfile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined
        })
    })

    test('updateProfile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            data: data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        })
    })
})
