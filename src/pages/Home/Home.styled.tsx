import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 38px;
  margin-top: 60px;
  color: rgb(16, 17, 18);
`;

export const Intro = styled.div`
  font-size: 24px;
  color: rgb(16, 17, 18);
`;

export const GroupWrap = styled.div`
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 40px;
  margin-top: 18px;
`;
