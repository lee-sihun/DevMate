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
    box-sizing: border-box;
    display: flex;
    border: 1px solid rgb(128, 128, 128);
    border-radius: 70%;
    width: 48px;
    height: 48px;
    color: white;
    align-items: center;
    justify-content: center;
    margin-right: 9px;
    &:first-child, &:last-child, &:nth-child(2), &:nth-last-child(2) {
      border: none;
      width: 40px;
      height: 40px;
      background-color: transparent !important;
      a {
        color: rgb(128, 128, 128);
        font-size: 40px;
      }
      &:hover > a {
        color: var(--success) !important;
      }
    }
    &:hover {
      border: none;
      background-color: var(--success);
      a {
        color: white;
      }
    }
  }

  a {
    text-decoration: none; /* 밑줄 제거 */
    font-size: 24px;
    font-weight: 600;
    color: rgb(128, 128, 128);
  }

  .active {
    border: none;
    background-color: var(--success);
    a {
      color: white;
    }
  }
`;