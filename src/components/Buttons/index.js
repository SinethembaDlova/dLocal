import React from 'react';
import { CustomButton } from './index.style';

const Button = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default Button;
