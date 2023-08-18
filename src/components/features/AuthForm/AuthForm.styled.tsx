import styled from 'styled-components';

export const Form = styled.form`
  padding: 50px 30px;
  min-width: 500px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

  h2 {
    margin-bottom: 40px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  legend {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const InputField = styled.div`
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
  }
`;

export const FormBtn = styled.button<{ $secondary?: boolean }>`
  background-color: ${(props) => (props.$secondary ? '#EFEFEF' : 'var(--blue-regular1)')};
  padding: 15px 0;
  color: ${(props) => (props.$secondary ? '#000' : '#fff')};
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$secondary ? '#ccc' : 'var(--blue-regular2)')};
  }
`;

export const SocialBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;

  p {
    margin-left: 10px;
    margin-top: 4px;
  }

  // &:hover {
  //   background-color: #ccc;
  // }
`;
