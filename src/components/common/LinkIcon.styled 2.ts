import { styled } from 'styled-components';

export const LinkWrap = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  box-sizing: border-box;
`;

export const LinkIcon = styled.img<{ size?: string }>`
  width: ${({ size }) => size ?? '30px'};
  aspect-ratio: 1/1;
  object-fit: contain;
`;
