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
  /* justify-content: center; */
  gap: 10px;
`;
export const InfoH3 = styled.h3`
  font-weight: bold;
  width: 70px;
  align-self: flex-start;
`;
export const InfoSpan = styled.span``;
export const TypeWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: auto;
`;
export const MaxMemberWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: auto;
`;
export const DueDateWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: auto;
`;
export const PositionsWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: auto;
`;
export const SkillsWrap = styled.div`
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
`;
