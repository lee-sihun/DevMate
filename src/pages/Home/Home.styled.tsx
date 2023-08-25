import styled from 'styled-components';

export const Title = styled.div`
  font-weight: bold;
  font-size: 38px;
  margin-top: 60px;
  color: rgb(16,17,18);
`;

export const Intro = styled.div`
  font-size: 24px;
  color: rgb(16,17,18);
`;

export const GroupWrap = styled.div`
  display: flex;
  justify-content: space-between; 
  margin-top: 10px;
  flex-wrap: wrap;
  & > * {
    margin-top: 30px
  }
`;