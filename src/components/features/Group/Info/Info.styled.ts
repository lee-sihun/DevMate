import { styled } from 'styled-components';

export const InfoSection = styled.section`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px 0;
  height: auto;
  border-bottom: 1px solid var(--default-border);
`;
export const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 700px;
  height: auto;
`;
export const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  gap: 10px;
  & > button {
    justify-content: center;
  }
`;
export const InfoH3 = styled.h3`
  font-weight: bold;
  width: 70px;
  align-self: flex-start;
`;
export const InfoSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: auto;
`;

export const GroupImg = styled.img`
  border-radius: 10px;
  width: 270px;
  height: 160px;
  object-fit: cover;
  box-shadow: 0 2px 2px var(--box-shadow);
`;
