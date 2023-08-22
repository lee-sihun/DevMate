import styled from 'styled-components';

export const Wrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  .bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: ${(props) => (props.isActive ? '#338BFF' : '#c8c8c8')};
  }

  p {
    color: ${(props) => (props.isActive ? '#000' : '#c8c8c8')};
    font-weight: 500;
    font-size: 20px;
  }
`;
