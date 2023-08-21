import React from 'react';
import {
  HeaderContainer,
  Logo,
  LogoImg,
  LogoText,
  NavContainer,
  NavButton,
  UserInfo,
  Notification,
} from './Header.styled';
import Button from '../Button/Button';
import ProfileCircle from '../ProfileCircle/ProfileCircle';

interface HeaderProps {
  isLoggedIn: boolean,
}

const Header = ({ isLoggedIn }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoImg />
        <LogoText />
      </Logo>
      <NavContainer>
        <NavButton>홈</NavButton>
        <NavButton>그룹 찾기</NavButton>
        <NavButton>공지사항</NavButton>
      </NavContainer>
      <UserInfo>
        {isLoggedIn ? (
          <>
            <Notification />
            <ProfileCircle
              size="42px"
              img="https://grayround.com/common/img/default_profile.png"
            />
          </>
        ) : (
          <Button color="var(--success)" height="38px">
            로그인
          </Button>
        )}
      </UserInfo>
    </HeaderContainer>
  );
};

export default Header;
