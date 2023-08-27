import { styled } from 'styled-components';

export const CreateHeaderCenter = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CreateHeaderTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: white;

  & > h2{
    font-size: 32px;
    font-weight: bold;
    text-shadow: 0 2px 2px var(--box-shadow);
  }
  & > p{
    font-size: 14px;
    opacity: .7;
    text-shadow: 0 2px 2px var(--box-shadow);
  }
`;