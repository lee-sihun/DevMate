import styled from 'styled-components';
import logoImg from '../../../assets/img/logo-icon.svg';
import logoText from '../../../assets/img/logo-text.svg';
import gitLab from '../../../assets/img/gitlab.svg';

const FooterContainer = styled.div`
	width: 100%;
	display: flex;
	border-top: 1px solid rgba(180,180,180,60);
	background-color: rgb(250,250,250);
	justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 1200px;
  height: 130px;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.button`
  display: flex;
  background-color: rgb(250,250,250);
  border: 0px;
  margin-right: 40px;
`;

const LogoImg = styled.div`
  width: 36.53px;
  height: 24.95px;
  background-image: url(${logoImg});
  background-color: rgb(250,250,250);
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  margin-right: 9px;
`;

const LogoText = styled.div`
  width: 131.55px;
  height: 24.06px;
  background-image: url(${logoText});
  background-color: rgb(250,250,250);
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 2px;
  border: 0px;
`;

const InfoText = styled.div`
  font-size: 13px;
  color: rgb(128,128,128);
`;

const GitLabLogo = styled.div`
  width: 58px;
	height: 54px;
  background-image: url(${gitLab});
  background-color: rgb(250,250,250);
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;  
	margin-left: auto;
  cursor: pointer;
  transition: all 0.4s ease 0s;
  &:hover {
    transform: scale(1.1);
  }
`;

export { FooterContainer, Container, Logo, Info, LogoImg, LogoText, InfoText, GitLabLogo};