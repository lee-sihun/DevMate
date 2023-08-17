import { styled } from 'styled-components';

export const TestSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const CardLayout = styled.div`
  width: 270px;
  height: 400px;
  box-shadow: 0 2px 2px var(--box-shadow);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid var(--seperator);
`;
export const CardH3 = styled.h3`
  
`;
export const CardH4 = styled.h4`
  
`;
export const CardSmall = styled.small`
  
`;
