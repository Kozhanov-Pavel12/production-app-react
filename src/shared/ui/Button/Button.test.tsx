import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'
import React from 'react'

describe('Button', () => {
    test('test btn', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})
