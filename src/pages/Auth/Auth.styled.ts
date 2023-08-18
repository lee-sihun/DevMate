import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  padding: 50px 30px;
  max-width: 500px;
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

export const FormBtn = styled.button<{ $secondary?: boolean }>`
  background-color: ${(props) => (props.$secondary ? '#FFF' : 'var(--blue-regular1)')};
  padding: 15px 0;
  color: ${(props) => (props.$secondary ? '#919191' : '#FFF')};
  border-radius: 4px;
  border: ${(props) => (props.$secondary ? '1px solid #ddd' : 'none')};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$secondary ? '#FFF' : 'var(--blue-regular2)')};
    color : ${(props) => (props.$secondary ? '#000' : '#FFF')};
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

  &:hover p {
    color: #000;
  }

  img {
    width: 20px;
    height: 20px;
  }

  p {
    margin-left: 10px;
    margin-top: 4px;
    color: #919191;
  }
`;
