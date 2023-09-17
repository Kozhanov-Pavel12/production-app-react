import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      children: 'Text'
    },
};

export const Clear: Story = {
    args: {
      children: 'Text',
      theme: ThemeButton.CLEAR
    },
};

export const Outline: Story = {
    args: {
      children: 'Text',
      theme: ThemeButton.OUTLINE
    },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]