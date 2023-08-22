import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

export const Form = styled.form`
  margin-top: 20px;
  padding: 10px 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  button {
    flex-grow: 1;
    padding: 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #ddd;
  }

  button.submit {
    background-color: var(--blue-regular1);
    color: #fff;
  }

  button.cancle:hover {
    background-color: #ccc;
  }

  button.submit:hover {
    background-color: var(--blue-regular2);
  }
`;

export const ReadOnlyField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 10px 15px 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #f7f7f7;
  margin-bottom: 20px;
  box-sizing: border-box;
  
  span {
    margin-bottom: 6px;
    font-size: 12px;
    color: #919191;
  }
`;


