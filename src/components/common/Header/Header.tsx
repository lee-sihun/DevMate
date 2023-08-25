import React, { useState } from 'react';
import {
  MainContainer,
  Container,
  HeaderContainer,
  Logo,
  LogoImg,
  LogoText,
  NavContainer,
  NavButton,
  UserInfo,
  Notification,
  DropdownStyle,
  UserInfoStyle,
  ShortCut,
  ShortCutLink,
  EditSvg,
  LockSvg,
  BtnWrap,
} from './Header.styled';
import Button from '../Button/Button';
import ProfileCircle from '../ProfileCircle/ProfileCircle';
import { useNavigate } from 'react-router-dom';
import { AuthorData } from 'author-data';
interface HeaderProps {
  isLoggedIn: boolean;
  userData?: AuthorData;
}

const Header = ({ isLoggedIn, userData }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen(!open);
  };

  const logout = () => {
    console.log('logout');
  };

  const navigateHandler = React.useCallback((url: string) => {
    setOpen(false);
    navigate(url);
  }, []);

  return (
    <MainContainer>
      <Container>
        <HeaderContainer>
          <Logo onClick={() => navigateHandler('/')}>
            <LogoImg />
            <LogoText />
          </Logo>
          <NavContainer>
            {/* <NavButton>홈</NavButton>
            <NavButton>그룹 찾기</NavButton>
            <NavButton>공지사항</NavButton> */}
          </NavContainer>
          <UserInfo>
            {isLoggedIn ? (
              <>
                {/* <Notification /> */}
                <BtnWrap>
                  {' '}
                  <Button color="var(--success)" height="38px" onClick={() => navigateHandler('/create')}>
                    그룹 만들기
                  </Button>
                </BtnWrap>
                <ProfileCircle size="42px" img={userData?.profileImage} onClick={handleToggle} />
                <DropdownStyle $isVisible={open}>
                  <UserInfoStyle>
                    <div className='infoWrap'>
                      <ProfileCircle size="42px" img={userData?.profileImage} onClick={() => navigateHandler('/profile')} />
                      <p onClick={() => navigateHandler('/profile')}>{userData?.nickname}</p>
                    </div>

                    <Button color="var(--error)" height="34px" onClick={logout}>
                      로그아웃
                    </Button>
                  </UserInfoStyle>
                  <ShortCut>
                    <ShortCutLink onClick={() => navigateHandler('/profile/edit')}>
                      <EditSvg />
                      <p>회원정보 수정</p>
                    </ShortCutLink>
                    <ShortCutLink onClick={() => navigateHandler('/mygroup')}>
                      <LockSvg />
                      <p>내 그룹 관리</p>
                    </ShortCutLink>
                  </ShortCut>
                </DropdownStyle>
              </>
            ) : (
              <Button color="var(--success)" height="38px" onClick={() => navigateHandler('/signin')}>
                로그인
              </Button>
            )}
          </UserInfo>
        </HeaderContainer>
      </Container>
    </MainContainer>
  );
};

export default Header;
