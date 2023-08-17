import styled from 'styled-components';
import logoImage from '../../../assets/img/logo-text.svg';

const Logo = styled.img`
  width: 180px;
  height: 25px;
  background-image: url(${logoImage});
  background-size: cover;
`;

const NavContainer = styled.nav``;

const NavButton = styled.button`
  border: 0px;
  padding: 0 0;
  color: rgba(16, 17, 18, 0.8);
  background-color: white;
  font-weight: bold;
  font-size: 21px;
  margin-right: 24px;
`;

export { Logo, NavContainer, NavButton };
