import React from 'react';
import { Btn } from './Button.styled';

type ButtonProps = {
  children: React.ReactNode;
  color: string;
  height: string;
  reverse?: boolean; // '?'를 추가하여 선택적 프롭으로 설정
  onClick?: () => void;
};

const Button = ({
  children,
  color,
  height,
  reverse = false,
  onClick,
}: ButtonProps) => {
  return (
    <Btn color={color} height={height} reverse={reverse} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
