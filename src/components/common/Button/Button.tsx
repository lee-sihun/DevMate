import React from 'react';
import { Btn } from './Button.styled';
import { StyleSheetManager } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  color: string;
  height: string;
  reverse?: string; // '?'를 추가하여 선택적 프롭으로 설정
  onClick?: () => void;
  //  onClick?: (...args: any[]) => void;
}

const Button = ({ children, color, height, reverse, onClick }: ButtonProps) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'reverse'}>
      <Btn color={color} height={height} reverse={reverse} onClick={onClick}>
        {children}
      </Btn>
    </StyleSheetManager>
  );
};

export default Button;
