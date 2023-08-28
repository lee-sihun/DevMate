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
    bottom: -5px;
    left: 0px;
    font-size: 12px;
    color: var(--error);
    animation: ${shake} 0.2s;
  }
`;

export const InputFieldStyleWrap = styled.div<{ $type: string; $labelName: string; $validate?: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${({ $validate }) => $validate && 'validate 0.5s ease-in-out'};

  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: ${({ $labelName }) => ($labelName === '사용 기술' ? '100px' : '70px')};
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid ${({ $validate }) => ($validate ? 'var(--error)' : '#888')};
    background-color: ${({ $type }) => ($type === 'email' ? '#e2e2e2' : 'white')};
    border-radius: 10px;

    div {
      font-size: 12px;
      color: ${({ $validate }) => ($validate ? 'var(--error)' : 'var(--second-text)')};
      img {
        width: 12px;
        height: 12px;
        margin-right: 10px;
      }
      strong {
        margin-left: 5px;
        color: var(--error);
      }
    }

    input {
      border: none;
      outline: none;
    }
  }

  @keyframes validate {
    0% {
      left: -3px;
    }
    10% {
      left: 3px;
    }
    20% {
      left: -3px;
    }
    30% {
      left: 3px;
    }
    40% {
      left: -3px;
    }
    50% {
      left: 3px;
    }
    60% {
      left: -3px;
    }
    70% {
      left: 3px;
    }
    80% {
      left: -3px;
    }
    90% {
      left: 3px;
    }
    100% {
      left: 0px;
    }
  }
`;
