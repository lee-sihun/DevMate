import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  25% {
    transform: translateX(-1px);
  }
  75% {
    transform: translateX(1px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 80px;

  label {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 12px;
    color: #919191;
    pointer-events: none;
  }

  input {
    padding: 30px 10px 10px 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 16px;
    outline: none;
  }

  span {
    position: absolute;
    bottom: 0;
    left: 10px;
    font-size: 12px;
    color: #ff6868;
    animation: ${shake} 0.2s;
  }
`;