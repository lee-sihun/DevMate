import React from 'react';
import { Btn } from './Button.styled';
import { StyleSheetManager } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  color: string;
  height: string;
  width?: string;
  reverse?: string; // '?'를 추가하여 선택적 프롭으로 설정
  disabled?: boolean;
  onClick?: () => void;
  //  onClick?: (...args: any[]) => void;
}

const Button = ({ children, color, height, reverse, disabled, onClick }: ButtonProps) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'reverse'}>
      <Btn color={color} height={height} reverse={reverse} disabled={disabled} onClick={onClick}>
        {children}
      </Btn>
    </StyleSheetManager>
  );
};

export default Button;
