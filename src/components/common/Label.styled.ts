import { styled } from 'styled-components';

export const PositionLabelWrap = styled.div<{ width?: string }>`
  display: flex;
  gap: 10px;
  ${({ width }) => (width ? `width: ${width};` : '')}
  flex-wrap: wrap;
`;

export const PositionLabel = styled.div`
  max-width: 90px;
  min-width: 40px;
  height: 26px;
  background-color: var(--blue-regular1);
  color: white;
  font-size: 13px;
  font-weight: 400;
  border-radius: 12px;
  text-align: center;
  line-height: 16px;
  box-sizing: border-box;
  padding: 5px 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
