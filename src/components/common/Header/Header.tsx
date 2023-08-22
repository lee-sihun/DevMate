import React from 'react';
import { Wrapper, Inner, Logo, LogoImg, LogoText, NavContainer, NavButton, UserInfo, Notification } from './Header.styled';
import Button from '../Button/Button';
import ProfileCircle from '../ProfileCircle/ProfileCircle';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
interface HeaderProps {
  isLoggedIn: boolean,
}


const Header = ({ isLoggedIn }: HeaderProps) => {
  return (
    <Wrapper>
      <Inner>
        <Link to="/">
          <Logo>
            <LogoImg />
            <LogoText />
          </Logo>
        </Link>
        <NavContainer>
          <NavButton>홈</NavButton>
          <NavButton>그룹 찾기</NavButton>
          <NavButton>공지사항</NavButton>
        </NavContainer>
        <UserInfo>
          {isLoggedIn ? (
            <>
              <Notification />
              <ProfileCircle size="42px" img="https://grayround.com/common/img/default_profile.png" />
            </>
          ) : (
            <Link to="/signin">
              <Button color="var(--success)" height="38px">
                로그인
              </Button>
            </Link>
          )}
        </UserInfo>
      </Inner>
    </Wrapper>
  );
};

export default Header;
