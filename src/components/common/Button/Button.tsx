import React from 'react';
import { Btn } from './Button.styled';

type ButtonProps = {
  children: React.ReactNode;
  color: string;
  height: string;
  reverse?: boolean; // '?'를 추가하여 선택적 프롭으로 설정 
};

const Button = ({ children, color, height, reverse = false }: ButtonProps) => {
  return (
    <Btn color={color} height={height} reverse={reverse}>
      {children}
    </Btn>
  );
};

export default Button;
