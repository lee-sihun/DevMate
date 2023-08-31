import styled, { css } from 'styled-components';

interface BtnProps {
  color: string;
  height: string;
  width?: string;
  reverse?: string;
}

const colorStyles = css<BtnProps>`
  ${({ reverse, color }) => {
    return reverse
      ? css`
          color: ${color};
          background-color: white;
        `
      : css`
          color: white;
          background-color: ${color};
        `;
  }}
`;

export const Btn = styled.button<BtnProps>`
  border: 0px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 12px;
  padding: 11px 18px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: filter 0.4s ease;
  &:hover {
    filter: brightness(1.2);
  }
  ${colorStyles}
`;
