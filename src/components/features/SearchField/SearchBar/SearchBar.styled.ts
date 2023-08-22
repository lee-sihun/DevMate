import styled from 'styled-components';
import searchIcon from '../../../../assets/img/search.svg';

const Container = styled.div`
  width: 582px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid #B3B3B3;
  display: flex;
  align-items: center;
  background-color: white;
`;

const SearchIcon = styled.svg`
  width: 25px;
  height: 25px;
  background-image: url(${searchIcon});
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  margin-left: 20px;
  cursor: pointer;
  transition: all 0.4s ease 0s;
  &:hover {
	filter: brightness(0.8);
  }
`;

const InputStyled = styled.input`
  border: none;
  width: 480px;
  height: 54px;
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;

  &:focus {
    outline: none; // 포커스 시 테두리 제거
  }

  &::placeholder {
    color: #B3B3B3; // placeholder 텍스트 색상 변경
    font-weight: bold; // placeholder 텍스트의 굵기 변경
  }
`;

export { Container, SearchIcon, InputStyled };

