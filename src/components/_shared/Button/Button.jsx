import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

export const ButtonComponent = (props) => {
  const { children, onClick, color, variant, type, size, disabled, className } = props;
  return (
    <Button
      color={color}
      variant={variant}
      type={type}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

ButtonComponent.defaultProps = {
  children: '',
  onClick: () => {},
  color: 'default',
  variant: 'contained',
  type: 'button',
  size: 'medium',
  disabled: false,
  className: '',
};
