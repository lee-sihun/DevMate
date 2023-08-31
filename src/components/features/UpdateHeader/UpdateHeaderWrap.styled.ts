import { styled } from 'styled-components';

export const UpdateHeaderCenter = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    max-width: 250px;
    max-height: 128px;
  }
`;
export const UpdateHeaderTitleWrap = styled.div`
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