import { styled } from 'styled-components';

export const Boundary = styled.div<{ width?: string; height?: string; $alignSelf?: 'flex-start' }>`
  width: ${({ width }) => width ?? '1px'} !important;
  height: ${({ height }) => height ?? '100%'} !important;
  background-color: var(--default-border);
  align-self: ${({ $alignSelf }) => $alignSelf ?? ''};
`;
