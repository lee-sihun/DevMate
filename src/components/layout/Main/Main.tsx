import React from 'react';
import { Wrapper, Inner } from './Main.styled';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

export default Main;
