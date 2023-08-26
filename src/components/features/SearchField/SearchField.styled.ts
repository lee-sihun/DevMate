import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`;

const Filter = styled.div`
  display: flex;
  > * + * {
    margin-left: 18px;
  }
`;

export { SearchContainer, FilterContainer, Filter };