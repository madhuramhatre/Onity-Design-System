import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  backgroundColor = null,
  size = 'medium',
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};

// Required by Button.stories.jsx
export default Button;

export const buttonVariants = [
  { label: 'Primary Filled', type: 'Primary Filled', state: 'Default', size: 'Regular' },
  { label: 'Secondary Filled', type: 'Secondary Filled', state: 'Default', size: 'Regular' },
  { label: 'Primary Outlined', type: 'Primary Outlined', state: 'Default', size: 'Regular' },
  { label: 'Primary Link', type: 'Primary Link', state: 'Default', size: 'Regular' },
  { label: 'Error Filled', type: 'Error Filled', state: 'Default', size: 'Regular' },
  { label: 'White Outlined', type: 'White Outlined', state: 'Default', size: 'Regular' },
  { label: 'Disabled Button', type: 'Primary Filled', state: 'Disabled', size: 'Regular' },
  { label: 'Small Button', type: 'Primary Filled', state: 'Default', size: 'Small' },
];