import React from 'react';
import { Logo, NavContainer, NavButton } from './Header.styled';

const Header = () => {
  return (
    <>
      <Logo />
      <NavContainer>
        <NavButton>홈</NavButton>
        <NavButton>그룹 찾기</NavButton>
        <NavButton>공지사항</NavButton>
      </NavContainer>
    </>
  );
};

export default Header;
