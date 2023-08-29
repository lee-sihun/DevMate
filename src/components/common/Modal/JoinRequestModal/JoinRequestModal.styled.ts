import styled from 'styled-components';
import github from '../../../../assets/img/github.svg';
import blogger from '../../../../assets/img/blogger.svg';

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 25px;
  }

  .info {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
  }

  .info h3 {
    font-size: 16px;
    margin-bottom: 0px;
  }

  .info p {
    color: #919191;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  p {
    font-size: 14px;
    line-height: 1.5;
    color: #acacac;
    font-weight: 400;
    margin: 20px 0;
    height: 250px;
    padding-right: 15px;
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
  }

  .btns {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: -10px
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
    filter: brightness(0.8);
  }

  .btns button:last-child {
    background-color: var(--error);
    color: white;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  margin-left: auto;
`;

export const GithubLogo = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${github});
  background-color: rgb(250,250,250);
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  margin-right: 9px;
`;

export const BloggerLogo = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${blogger});
  background-color: rgb(250,250,250);
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  margin-right: 9px;
`;