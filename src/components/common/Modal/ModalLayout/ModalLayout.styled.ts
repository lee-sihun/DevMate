import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
`;

export const Header = styled.header<{ mode: 'ALERT' | 'NOTICE' }>`
  position: relative;
  padding: 12px 0;
  background-color: ${(props) => (props.mode === 'ALERT' ? 'var(--error)' : 'var(--blue-regular1)')};
  color: #fff;
  border-radius: 4px 4px 0 0;
  font-size: 14px;
  text-align: center;
`;

export const Inner = styled.div`
  background-color: #fafafa;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
  width: 100%;
  max-width: 550px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 30px 30px 40px;
`;