import { styled } from 'styled-components';

export const DescFooterWrap = styled.div`
  width: 120px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid var(--default-border);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  align-self: flex-end;
  & > button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: white;
    border: none;
  }
`;

