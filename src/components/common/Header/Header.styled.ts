import styled, {css} from 'styled-components';
import logoImg from '../../../assets/img/logo-icon.svg';
import logoText from '../../../assets/img/logo-text.svg';
import noticeOn from '../../../assets/img/notice-on.svg';
import edit from '../../../assets/img/edit.svg';
import lock from '../../../assets/img/lock.svg';
// import noticeOff from '../../../assets/img/notice-off.svg';

interface DropProps {
	$isVisible?: boolean;
}

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
	width: 100%;
	display: flex;
	border-bottom: 1px solid rgb(240, 241, 243);
	background-color: white;
	justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 1200px;
  align-items: center;
`;

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

const DropdownStyle = styled.div<DropProps>`
	position: absolute;
  /* height: 228px; */
	top: 70px;
  left: 1017px;
	/* padding: 15px 15px; */
	display: flex;
	flex-direction: column;
	border-radius: 7px;
	background: white;
	border: 1px solid #B3B3B3;
	z-index: 999; /* 높은 값을 설정하여 가장 앞에 표시 */
	${({ $isVisible }) => $isVisible !== true && 
		css`
			visibility: hidden;
		`}
`;

const UserInfoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 15px;

  p {
    cursor: pointer;
    color: rgb(16,17,18);
    font-size: 16px;
    font-weight: 600;
    margin-left: 15px;
    margin-right: 62px;
  }
`;

const ShortCut = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #B3B3B3;
`;

const ShortCutLink = styled.div`
  display: flex;
  /* align-items: center; */
  margin-left: 16px;
  margin-top: 16px;
  cursor: pointer;
  p {
    color: rgb(16,17,18);
    font-size: 14px;
  }
`;

const EditSvg = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(${edit});
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  margin-right: 11px;
`;

const LockSvg = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${lock});
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  margin-left: -2px;
  margin-right: 11px;
  margin-bottom: 15px;
`;

const BtnWrap = styled.div`
  margin-right: 16px;
`;

export {
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
};
