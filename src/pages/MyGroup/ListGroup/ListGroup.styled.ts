import styled from 'styled-components';
import groupImg from '../../../assets/img/groupImg.svg';

export const Wrapper = styled.div`
  padding: 0 0px;
`;

export const TypeSortTabs = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px 0;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 20px; 
`;

export const GroupImg = styled.div<{ $marginTop?: string}>`
  width: 1200px;
  height: 140px;
  background-image: url(${groupImg});
  background-color: #fafafa;
  background-size: auto;
  background-repeat: no-repeat;
  border-radius: 10px;
  /* margin-right: 9px; */
  display: flex;
  align-items: center;
  margin-top: ${({$marginTop}) => $marginTop};

  h2 {
    margin-left: 38px;
    color: rgba(255,255,255, 1);
    font-weight: bold;
    font-size: 64px;
    text-shadow: 1px 1px 3px gray;
  }
`;