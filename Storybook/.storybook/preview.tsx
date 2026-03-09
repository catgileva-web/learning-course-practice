import type { Preview } from '@storybook/react';
import '../src/theme-bootstrap/custom.scss';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
};

export default preview;
