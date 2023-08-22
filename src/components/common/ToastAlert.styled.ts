import { styled } from 'styled-components';

export const ToastAlert = styled.div<{ color?: string; backgroundColor?: string }>`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: auto;
  box-sizing: border-box;
  padding: 10px 30px;
  border: 1px solid var(--default-border);
  border-radius: 20px;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 99999;
  color: ${({ color }) => color ?? 'var(--second-text)'};
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'var(--layout-bg)'};

  box-shadow: 0 2px 2px var(--box-shadow-light);
  animation: newAlert 0.25s ease-in-out;
  & > strong {
    font-weight: 400;
  }
  @keyframes newAlert {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;