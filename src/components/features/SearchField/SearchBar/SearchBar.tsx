import React from 'react';
import { Container, InputStyled, SearchIcon } from './SearchBar.styled';

const SearchBar = () => {
  return <Container><SearchIcon /><InputStyled placeholder='검색어를 입력해주세요'/></Container>;
};

export default SearchBar;
