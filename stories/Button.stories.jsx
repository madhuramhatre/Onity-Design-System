import React from 'react';
import Button, { buttonVariants } from './Button.jsx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/ak0IV3s1bbMRn3lrWQGxyj/Copy-of-Customer-Facing-Design-System--Copy-?node-id=6132-13564',
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['Primary Filled', 'Secondary Filled', 'Primary Outlined', 'Primary Link', 'Error Filled', 'White Outlined'],
    },
    state: {
      control: { type: 'select' },
      options: ['Default', 'Hover', 'Pressed', 'Disabled'],
    },
    size: {
      control: { type: 'select' },
      options: ['Regular', 'Small'],
    },
    leftIcon: { control: { type: 'boolean' } },
    rightIcon: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    label: 'Button',
    type: 'Primary Filled',
    state: 'Default',
    size: 'Regular',
    leftIcon: false,
    rightIcon: false,
    disabled: false,
  },
};

export const Playground = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '24px' }}>
      <Button {...args} />
      <Button {...args} leftIcon rightIcon />
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', padding: '24px' }}>
      {buttonVariants.map((variant) => (
        <div key={`${variant.type}-${variant.state}-${variant.size}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', minHeight: '44px' }}>
          <Button
            label={variant.label}
            type={variant.type}
            state={variant.state}
            size={variant.size}
            leftIcon
            rightIcon
            disabled={variant.state === 'Disabled'}
          />
          <span style={{ fontSize: 12, color: '#666' }}>{variant.type} / {variant.state} / {variant.size}</span>
        </div>
      ))}
    </div>
  ),
};