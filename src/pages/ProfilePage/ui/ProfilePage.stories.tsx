import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    args: {},
};
Normal.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'Username',
      first: 'First',
      lastname: 'Lastname',
      age: 24,
      city: 'Krasnoyarsk',
      country: Country.Russia,
      currency: Currency.RUB,
    }
  }
})]


export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      username: 'Username',
      first: 'First',
      lastname: 'Lastname',
      age: 24,
      city: 'Krasnoyarsk',
      country: Country.Russia,
      currency: Currency.RUB,
    }
  }
})]