import React from 'react';
import { FooterContainer, Container, GitLabLogo, Info, InfoText, Logo, LogoImg, LogoText } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Info>
          <Logo>
            <LogoImg />
            <LogoText />
          </Logo>
          <InfoText>E-mail : devmate.official@gmail.com</InfoText>
          <InfoText>Copyright ©️ DevMate. All rights reserved.</InfoText>
        </Info>
        <GitLabLogo
          onClick={() => {
            window.open('https://kdt-gitlab.elice.io/sw_track/class_05/web_2_project/team13');
          }}
        />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
