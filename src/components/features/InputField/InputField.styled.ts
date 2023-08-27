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

export const Wrapper = styled.div<{ $hasError?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 100%;

  label {
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 12px;
    color: #919191;
    pointer-events: none;
  }

  input {
    padding: 30px 10px 10px 15px;
    border-radius: 4px;
    border: 1px solid ${(props) => (props.$hasError ? 'var(--error)' : '#ddd')};
    font-size: 16px;
    outline: none;
  }

  span {
    position: absolute;
    bottom: 0;
    left: 15px;
    font-size: 12px;
    color: var(--error);
    animation: ${shake} 0.2s;
  }
`;

export const InputFieldStyleWrap = styled.div<{ $type: string }>`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #888;
    background-color: ${({ $type }) => ($type === 'email' ? '#e2e2e2' : 'white')};
    border-radius: 10px;
  }
  label > div {
    font-size: 12px;
    color: var(--second-text);
  }
  label > input {
    border: none;
    outline: none;
  }
`;
