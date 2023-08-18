import React from 'react';
import { Wrapper, Inner } from './Main.styled';

interface IMainProps {
  children: React.ReactNode;
}

const Main = ({ children }: IMainProps) => {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

export default Main;
