import React from 'react';
import { Wrapper, Inner, Logo, LogoImg, LogoText, NavContainer, NavButton, UserInfo, Notification } from './Header.styled';
import Button from '../Button/Button';
import ProfileCircle from '../ProfileCircle/ProfileCircle';
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
interface HeaderProps {
  isLoggedIn: boolean,
}
=======
type HeaderProps = {
  isLoggedIn: boolean;
};
>>>>>>> b4b9588 (Chore : Header 수정)

const Header = ({ isLoggedIn }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Inner>
        <Logo onClick={() => navigate('/')}>
          <LogoImg />
          <LogoText />
        </Logo>
        <NavContainer>
          <NavButton onClick={() => navigate('/')}>홈</NavButton>
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
            <Button color="var(--success)" height="38px" onClick={() => navigate('/signin')}>
              로그인
            </Button>
          )}
        </UserInfo>
      </Inner>
    </Wrapper>
  );
};

export default Header;
