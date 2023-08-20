import { styled } from 'styled-components';

export const ToastAlert = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: auto;
  height: 40px;
  box-sizing: border-box;
  padding: 10px 30px;
  border: 1px solid var(--default-border);
  border-radius: 20px;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  line-height: 20px;
  color: var(--second-text);
  background-color: var(--layout-bg);
  box-shadow: 0 2px 2px var(--box-shadow-light);
  animation: newAlert 0.25s ease-in-out;
  & > strong {
    font-weight: bold;
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
