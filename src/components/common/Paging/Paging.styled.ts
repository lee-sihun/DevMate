import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 60px;
  .pagination {
    width: 1200px;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
  }

  li {
    display: flex;
    border: 1px solid rgb(128, 128, 128);
    border-radius: 70%;
    width: 48px;
    height: 48px;
    color: white;
    align-items: center;
    justify-content: center;
    margin-right: 9px;
  }

  a {
    text-decoration: none; /* 밑줄 제거 */
    font-size: 24px;
    font-weight: 600;
    color: rgb(128, 128, 128);
  }

  .active {
    width: 50px;
    height: 50px;
    border: none;
    background-color: var(--success);
    a {
      color: white;
    }
  }
`;