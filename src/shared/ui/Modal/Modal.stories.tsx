import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique asperiores accusamus cum possimus dolor corporis amet iusto nesciunt quo doloremque, praesentium nihil aspernatur laboriosam esse soluta et exercitationem obcaecati.',
  }
}

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique asperiores accusamus cum possimus dolor corporis amet iusto nesciunt quo doloremque, praesentium nihil aspernatur laboriosam esse soluta et exercitationem obcaecati.',
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
