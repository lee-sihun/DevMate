import styled, { css } from 'styled-components';

interface BtnProps {
  color: string;
  height: string;
}

export const Btn = styled.button<BtnProps>`
  border: 0px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 12px;
  padding: 11px 18px;
  color: white;
  background-color: ${({ color }) => color};
  ${({ height }) => {
    return css`
      height: ${height};
    `;
  }}
`;
