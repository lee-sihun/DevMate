import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const TestSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

export const CardLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const CardLayout = styled.div`
  width: 270px;
  height: 400px;
  box-shadow: 0 2px 2px var(--box-shadow);
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const CardType = styled.div<{ type: string }>`
  width: 100px;
  height: 20px;
  background-color: ${({ type }) => (type === 'study' ? 'var(--blue-regular1)' : 'var(--blue-semi-dark2)')};
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-45deg) translate(-30px, -14px);
  text-align: center;
  line-height: 20px;
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  box-sizing: border-box;
  box-shadow: 0 1px 1px var(--box-shadow);
`;

export const CardImg = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-bottom: 1px solid var(--seperator);
  box-sizing: border-box;
`;
export const CardTextLayout = styled.div`
  width: 100%;
  height: 240px;
  box-sizing: border-box;
  padding: 20px;
`;
export const CardH3 = styled.h3`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  font-weight: 600;
  font-size: 16px;
`;
export const CardH4 = styled.h4`
  margin: 20px 0 6px 0;
  font-size: 13px;
`;
export const SkillImgWrap = styled.div<{ width?: string }>`
  display: flex;
  gap: 10px;
  ${({ width }) => (width ? `width: ${width};` : '')}
  /* max-height: 30px; */
  flex-wrap: wrap;
  align-items:center;
`;
export const SkillImg = styled.img`
  width: 30px;
  height: 30px;
`;
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 13px;
  font-weight: lighter;
  box-sizing: border-box;
`;

export const CardCntWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const CardCntItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
