import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 10px;
  background: #f0f1f3;
  display: flex;
  padding: 30px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  gap: 5%;
`;

export const Inner = styled.div`
  display: flex;
`;

export const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  border-radius: 10px;
  background-color: #fafafa;
  padding: 20px 25px;
  gap: 15px;

  h3 {
    margin-top: 12px;
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
  }

  .end-date {
    font-size: 14px;
    color: #888;
  }

  .btns {
    display: flex;
    gap: 10px;
  }

  .btns button {
    width: 120px;
    padding: 6px 10px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    background-color: var(--blue-regular1);
    color: white;
    cursor: pointer;
  }

  .btns button:hover {
    background-color: var(--blue-regular2);
  }

  .btns button:last-child {
    background-color: #e9e9e9;
    color: #333;
  }

  .btns button:last-child:hover {
    background-color: #c6c6c6;
  }
`;

export const InfoField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h4 {
    font-size: 13px;
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 1.5;
    text-overflow: ellipsis;
    font-size: 15px;
    color: #555;
  }

  ul {
    display: flex;
    gap: 12px;
  }

  .position {
    padding: 4px 12px;
    background-color: var(--blue-regular1);
    font-size: 14px;
    color: #fff;
    border-radius: 12px;
  }

  .tech img {
    width: 24px;
    height: 24px;
    border-radius: 4px;
  }
`;

export const JoinStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 60%;
  max-height: 470px;
  padding-right: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #e1e1e1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888; /* 스크롤바의 색상 */
    border-radius: 4px; /* 스크롤바 모서리 둥글게 */
  }

  h4 {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
  }
`;

export const JoinRequest = styled.div`
  display: flex;
  background-color: #fafafa;
  align-items: center;
  padding: 20px 25px;
  border-radius: 10px;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
  p {
    margin-top: 10px;
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
