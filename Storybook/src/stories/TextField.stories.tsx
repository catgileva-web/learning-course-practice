import type { Meta, StoryObj } from '@storybook/react';
import { Form, Button } from 'react-bootstrap';

const meta: Meta = {
  title: 'Components/Form',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Form.Group controlId="defaultText">
      <Form.Label>Label</Form.Label>
      <Form.Control type="text" placeholder="Enter text..." />
    </Form.Group>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Form.Group controlId="emailHelper">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="you@example.com" aria-describedby="emailHelperText" />
      <Form.Text id="emailHelperText" className="text-body-secondary">
        We will never share your email
      </Form.Text>
    </Form.Group>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <Form.Group controlId="emailError">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" value="invalid-email" isInvalid />
      <Form.Control.Feedback type="invalid">
        Please enter a valid email address
      </Form.Control.Feedback>
    </Form.Group>
  ),
};

export const FormExample: Story = {
  render: () => (
    <Form style={{ maxWidth: 400 }} className="d-flex flex-column gap-3">
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="John" />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Doe" />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="john@example.com" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button variant="primary" size="lg" type="submit">Submit</Button>
    </Form>
  ),
};
