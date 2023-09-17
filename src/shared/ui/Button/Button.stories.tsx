import type { Meta, StoryObj } from '@storybook/react';

import { Button, SizeButton, ThemeButton } from './Button';
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
    children: 'Text',
  }
};
    

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  }
};


export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  }
}


export const OutlineSizeL: Story = {
  args: {
      children: 'Text',
      theme: ThemeButton.OUTLINE,
      size: SizeButton.L,
  }
}

export const OutlineSizeXl: Story = {
  args: {
      children: 'Text',
      theme: ThemeButton.OUTLINE,
      size: SizeButton.XL,
  }
}

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  }
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];


export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
  }
}


export const BackgroundInverted: Story = {
  args: {
      children: 'Text',
      theme: ThemeButton.BACKGROUND_INVERTED,
  }
}


export const Square: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
  }
}


export const SquareSizeL: Story = {
  args: {
      children: '>',
      theme: ThemeButton.BACKGROUND_INVERTED,
      square: true,
      size: SizeButton.L,
  }
}


export const SquareSizeXl: Story = {
  args: {
      children: '>',
      theme: ThemeButton.BACKGROUND_INVERTED,
      square: true,
      size: SizeButton.XL,
  }
}
