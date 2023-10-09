import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
        username: 'Username',
        first: 'First',
        lastname: 'Lastname',
        age: 24,
        city: 'Krasnoyarsk',
        country: Country.Russia,
        currency: Currency.RUB,
        avatar: avatar
    }
  }
}

export const IsLoading: Story = {
    args: {
      isLoading: true
    }
}

export const WithError: Story = {
    args: {
      error: 'true'
    }
}
