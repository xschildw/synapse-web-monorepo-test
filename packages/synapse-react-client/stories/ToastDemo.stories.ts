import { Meta, StoryObj } from '@storybook/react'

import { ToastDemo } from '../demo/containers/playground/ToastDemo'

const meta = {
  title: 'UI/ToastMessage',
  component: ToastDemo,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Toast: Story = {}
