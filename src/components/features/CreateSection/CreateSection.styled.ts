import { styled } from 'styled-components';

export const CreateSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const CreateInfoWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 40px;
`;

export const CreateButtonWrap = styled.div`
  display: flex;
  gap: 20px;
  align-self: flex-end;
  & > button {
    width: 120px;
    justify-content: center;
  }
  & > button:nth-child(1) {
    color: var(--blue-regular1);
  }
`;
