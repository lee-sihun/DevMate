import React from 'react';
import { Btn } from './Button.styled';

type ButtonProps = {
  children: React.ReactNode;
  color: string;
  height: string;
};

const Button = ({ children, color, height }: ButtonProps) => {
  return (
    <Btn color={color} height={height}>
      {children}
    </Btn>
  );
};

export default Button;
