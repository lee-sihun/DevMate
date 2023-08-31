import styled from 'styled-components';

export const NotiContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 1200px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0,0,0,0.25);
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  .wrap {
  display: flex;
  align-items: center;
    div {
      background-color: var(--success);
      width:9px;
      height:9px;
      border-radius:75px;
    }

    h2 {
      margin-left: 11px;
      font-weight: 600;
      font-size: 16px;
    }

    h3 {
      font-size: 16px;
      margin-left: 30px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    justify-content: center;
    /* margin-left: 30px; */
  }

  button {
    width: 70px;
    align-items: center;
    justify-content: center;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  h4 {
    font-weight: bold;
    font-size: 27px;
    margin-right: 10px;
  }

  a {
    cursor: pointer;
    font-size: 13px;
    text-decoration: underline;
    margin-left: auto;
  }
`;