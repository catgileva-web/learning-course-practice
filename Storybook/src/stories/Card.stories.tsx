import type { Meta, StoryObj } from '@storybook/react';
import { Card, Button } from 'react-bootstrap';

const meta: Meta = {
  title: 'Components/Card',
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <Card style={{ maxWidth: 345 }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className="text-body-secondary">
          This is a basic card component styled by the custom Bootstrap theme.
          It demonstrates border radius, shadow, and typography.
        </Card.Text>
        <div className="d-flex gap-2">
          <Button variant="link" size="sm">Learn More</Button>
          <Button variant="primary" size="sm">Action</Button>
        </div>
      </Card.Body>
    </Card>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div className="row g-3">
      {[
        { title: 'Revenue', value: '$24,500', change: '+12%' },
        { title: 'Users', value: '1,234', change: '+8%' },
        { title: 'Orders', value: '456', change: '+23%' },
      ].map((item) => (
        <div className="col-4" key={item.title}>
          <Card>
            <Card.Body>
              <Card.Text className="text-body-secondary mb-1">
                {item.title}
              </Card.Text>
              <h4 className="mt-1">{item.value}</h4>
              <Card.Text className="text-primary">
                {item.change} from last month
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  ),
};
