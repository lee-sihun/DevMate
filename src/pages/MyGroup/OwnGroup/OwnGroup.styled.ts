import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

  h3 {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  h3 > span {
    font-size: 16px;
    background-color: #f0f1f3;
    padding: 2px 6px;
    border-radius: 10px;
    margin-left: 10px;
  }
`;

export const Inner = styled.div`
  display: flex;
`;

export const LeftSection = styled.section`
  margin-right: 50px;
  
`;

export const BtnGroup = styled.div`
  width: 250px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  grid-row-gap: 7px;
  grid-column-gap: 7px;
  margin-top: 10px;
  margin-left: 10px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SectionTitle = styled.h3`
  margin-top: 12px;
  font-size: 18px;
  font-weight: 600;
  color: #333;

  span {
    font-size: 24px;
  }
`;

export const JoinRequest = styled.li`
  display: flex;
  background-color: #fff;
  align-items: center;
  padding: 20px;
  border-radius: 10px;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }

  p {
    margin-top: 6px;
    font-size: 14px;
    margin-right: 20px;
    color: #919191;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
  }

  button {
    width: 120px;
    padding: 6px 10px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    background-color: var(--blue-regular1);
    color: white;
    cursor: pointer;
  }
`;

export const GroupList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 440px;
  border-radius: 10px;
  overflow-y: scroll;
  padding-right: 14px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #fafafa;
  }

  &::-webkit-scrollbar-thumb {
    background: #CCE2FF;
    border-radius: 4px;
  }
`;

export const GroupItemStyle = styled.li<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#f0f1f3' : '#fafafa')};
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  align-items: center;
  border-radius: 10px;

  small,
  span {
    font-size: 14px;
    color: #919191;
    font-weight: 500;
  }
`;

export const RightSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  /* background-color: #f0f1f3; */
  padding: 0 20px;
`;

export const GroupInfo = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-radius: 10px;

  .info {
    flex: 1;
    margin-right: 10px;

    small {
      color: var(--blue-regular1);
      font-weight: 500;
      font-size: 14px;
    }

    h4 {
      font-size: 28px;
      font-weight: 500;
      color: #4b4b4b;
    }
  }

  .position {
    margin: 5px 0 15px;
    display: flex;
    gap: 12px;

    span {
      padding: 4px 10px;
      background-color: #919191;
      color: #fff;
      font-size: 12px;
      border-radius: 4px;
    }
  }

  .image {
    width: 280px;
    height: 180px;
    border: 2px solid #f0f1f3;
    border-radius: 10px;
    overflow: hidden;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .tech {
    display: flex;
    gap: 10px;
  }

  .tech img {
    width: 25px;
    height: 25px;
  }

  .btns {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }

  .btns button {
    width: 120px;
    padding: 6px 10px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    background-color: #ddd;
    cursor: pointer;
  }

  .btns button.blue {
    background-color: var(--blue-regular1);
    color: #fff;
    cursor: pointer;
  }
`;

export const JoinStatus = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    height: 200px;
    gap: 15px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #e1e1e1;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
  }

  h4 {
    display: flex;
    gap: 15px;
    line-height: 1.5;
    margin-bottom: 15px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  h4 {
    font-weight: 600;
    font-size: 16px;
    margin-right: 10px;
  }

  a {
    font-size: 13px;
    text-decoration: underline;
    margin-left: auto;
  }
`;
