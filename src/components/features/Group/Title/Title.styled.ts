import { styled } from 'styled-components';

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid var(--default-border);
  box-sizing: border-box;
  padding: 0 0 20px 0;
`;
export const TitleH2 = styled.h2`
  font-size: 33px;
  font-weight: bold;
`;
export const TitleSemiWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AuthorWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const AuthorName = styled.div`
  font-weight: bold;
`;
export const CountWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const CountImg = styled.img``;
