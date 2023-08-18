import styled from 'styled-components';
import logoImg from '../../../assets/img/logo-icon.svg';
import logoText from '../../../assets/img/logo-text.svg';
import noticeOn from '../../../assets/img/notice-on.svg';
// import noticeOff from '../../../assets/img/notice-off.svg';

const HeaderContainer = styled.header`
  display: flex;
  width: 1200px;
  height: 80px;
  align-items: center;
`;

const Logo = styled.button`
  display: flex;
  background-color: white;
  border: 0px;
  margin-left: 18px;
  margin-right: 40px;
  cursor: pointer;
`;

const LogoImg = styled.div`
  width: 36.53px;
  height: 24.95px;
  background-image: url(${logoImg});
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  margin-right: 9px;
`;

const LogoText = styled.div`
  width: 131.55px;
  height: 24.06px;
  background-image: url(${logoText});
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
`;

const NavContainer = styled.nav`
  margin-top: 7px;
`;

const NavButton = styled.button`
  border: 0px;
  padding: 0 0;
  color: rgba(16, 17, 18, 0.8);
  background-color: white;
  font-weight: bold;
  font-size: 21px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 24px; /* 마지막 버튼을 제외한 모든 버튼에 간격 추가 */
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 18px;
`;

const Notification = styled.div`
  width: 33px;
  height: 33px;
  background-image: url(${noticeOn});
  background-color: white;
  background-size: contain;
  border: 0px;
  margin-right: 18px;
  cursor: pointer;
`;

export {
  HeaderContainer,
  Logo,
  LogoImg,
  LogoText,
  NavContainer,
  NavButton,
  UserInfo,
  Notification,
};
