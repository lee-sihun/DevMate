import { styled } from 'styled-components';

export const Boundary = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width ?? '1px'};
  height: ${({ height }) => height ?? '100%'};
  background-color: var(--default-border);
`;
