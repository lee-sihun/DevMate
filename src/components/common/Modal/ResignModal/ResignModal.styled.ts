import styled from 'styled-components';

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 25px;
  }

  .info p {
    margin-top: 5px;
    color: #919191;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;

  strong {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    line-height: 1.5;
    color: #acacac;
    font-weight: 400;
    strong{
      font-size: 12px;
      color: black;
      text-decoration: underline;
    }
  }
`;

export const Form = styled.form`
  button {
    border: none;
    color: #fff;
    background-color: var(--error);
    border-radius: 4px;
    margin-top: 10px;
    padding: 12px 0;
    width: 100%;
    cursor: pointer;
  }
`;
