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
import { useLogOutMutation } from 'store/hooks/user.hooks';
import defaultProfile from 'assets/img/default-profile.svg';
import { urlParser } from 'utils/parser';

interface HeaderProps {
  isFetching: boolean;
  isLoggedIn: boolean;
  userData?: AuthorData;
}

const Header = ({ isFetching, isLoggedIn, userData }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [logOutHandler] = useLogOutMutation();

  const handleToggle = () => {
    setOpen(!open);
  };

  const logout = () => {
    // console.log('logout');
    logOutHandler('');
    // location.reload();
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
              isFetching ? (
                <Button color="var(--success)" height="38px" onClick={() => navigateHandler('/signin')}>
                  로그인
                </Button>
              ) : (
                <>
                  {/* <Notification /> */}
                  <BtnWrap>
                    {' '}
                    <Button color="var(--success)" height="38px" onClick={() => navigateHandler('/create')}>
                      그룹 만들기
                    </Button>
                  </BtnWrap>
                  {/* <ProfileCircle size="42px" img={userData?.profileImage
                    ? `${process.env.REACT_APP_API_SERVER_URL}/${urlParser(userData?.profileImage)}`
                    : defaultProfile} onClick={handleToggle} /> */}
                  <img src={userData?.profileImage ? `/${userData?.profileImage}` : defaultProfile} alt="사용자 이미지" onClick={handleToggle} />
                  <DropdownStyle $isVisible={open}>
                    <UserInfoStyle>
                      <div className="infoWrap">
                        <img
                          src={userData?.profileImage ? `/${userData?.profileImage}` : defaultProfile}
                          alt="사용자 이미지"
                          onClick={() => navigateHandler('/profile')}
                        />
                        {/* <ProfileCircle size="42px" img={userData?.profileImage
                          ? `${process.env.REACT_APP_API_SERVER_URL}/${urlParser(userData?.profileImage)}`
                          : defaultProfile} onClick={() => navigateHandler('/profile')} /> */}
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
              )
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
