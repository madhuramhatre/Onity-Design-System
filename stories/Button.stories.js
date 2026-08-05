import React from 'react';
import { fn } from 'storybook/test';
import { Box } from './Button';

export default {
  title: 'Components/Button',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/ak0IV3s1bbMRn3lrWQGxyj/Copy-of-Customer-Facing-Design-System--Copy-?node-id=421-4878&m=dev',
    },
  },
  args: { onClick: fn() },
};

export const AllFigmaVariants = () => <Box />;