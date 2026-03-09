import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'react-bootstrap';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'outline-primary', 'outline-secondary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const OutlinePrimary: Story = {
  args: {
    variant: 'outline-primary',
    children: 'Outline Primary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
      </div>
      <div className="d-flex gap-2">
        <Button variant="outline-primary">Outline</Button>
        <Button variant="outline-secondary">Outline</Button>
      </div>
      <div className="d-flex gap-2 align-items-center">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
    </div>
  ),
};
