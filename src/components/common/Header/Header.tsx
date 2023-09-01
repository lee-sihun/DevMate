import React, { useState, useEffect, useRef } from 'react';
import {
  MainContainer,
  Container,
  HeaderContainer,
  Logo,
  LogoImg,
  LogoText,
  NavContainer,
  UserInfo,
  DropdownStyle,
  UserInfoStyle,
  ShortCut,
  ShortCutLink,
  EditSvg,
  LockSvg,
  BtnWrap,
} from './Header.styled';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { AuthorData } from 'author-data';
import { useLogOutMutation, userApi } from 'store/hooks/user.hooks';
import defaultProfile from 'assets/img/default-profile.svg';
import { useAppDispatch } from 'store/hooks';


interface HeaderProps {
  isFetching: boolean;
  isLoggedIn: boolean;
  userData?: AuthorData;
}

const Header = ({ isFetching, isLoggedIn, userData }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [logOutHandler, { isSuccess }] = useLogOutMutation();
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    setOpen(!open);
  };

  const logout = async () => {
    await logOutHandler(userData?._id);
    dispatch(userApi.util.resetApiState());
    navigate('/');
  };

  const navigateHandler = React.useCallback((url: string) => {
    setOpen(false);
    navigate(url);
  }, []);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  useEffect(() => {
    if (isSuccess) {
      // console.log('success => refetch');
      // refetch();
    }
  }, [isSuccess]);

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
                    {
                      userData?.createdGroup
                        ? <Button color="var(--success)" height="38px" onClick={() => navigateHandler(`/detail/${userData.createdGroup}`)}>
                          내 그룹
                        </Button>
                        : <Button color="var(--success)" height="38px" onClick={() => navigateHandler('/create')}>
                          그룹 만들기
                        </Button>
                    }
                  </BtnWrap>
                  <img
                    src={
                      userData?.profileImage
                        ? `/${userData?.profileImage}`
                        : defaultProfile
                    }
                    alt="사용자 이미지"
                    onClick={handleToggle}
                  />
                  <DropdownStyle ref={modalRef} $isVisible={open}>
                    <UserInfoStyle>
                      <div className='infoWrap'>
                        <img src={userData?.profileImage
                          ? `/${userData?.profileImage}`
                          : defaultProfile} alt="사용자 이미지" onClick={() => navigateHandler('/profile')} />
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
