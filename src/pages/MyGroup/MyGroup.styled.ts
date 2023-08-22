import styled from 'styled-components';

export const TabMenu = styled.ul`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;

  li {
    width: 150px;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid transparent;
    margin-bottom: -1px;
    color: #c8c8c8;
    cursor: pointer;
  }

  li.active {
    border-bottom: 1px solid #338bff;
    color: #000;
  }
`;
