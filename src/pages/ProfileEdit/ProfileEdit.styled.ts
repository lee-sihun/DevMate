import styled from 'styled-components';

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

export const ProfileBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  button{
    width: 500px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    &.save{
      background-color: var(--blue-regular1);
      color: white;
    }
    &.cancel{
      background-color: transparent;
      color: var(--blue-regular1);
    }
    &:hover{
      filter: brightness(110%);
    }
  }
`;
