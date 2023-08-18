import { css, styled } from 'styled-components';

export const SkeletonAnimation = css`
  background-color: rgb(230, 230, 230);
  background-image: linear-gradient(
    90deg,
    rgb(230, 230, 230),
    rgb(235, 235, 235),
    rgb(230, 230, 230)
  );
  background-size: 100%;
  background-repeat: no-repeat;
  @keyframes skeleton {
    0% {
      background-position: -200px 0px;
    }
    100% {
      background-position: calc(200px + 100%) 0px;
    }
  }
  animation: 2s ease-in-out 0s infinite skeleton;
`;

export const CardSkeletonImg = styled.div`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid var(--seperator);
  box-sizing: border-box;
  ${SkeletonAnimation};
`;

export const CardSkeletonTitle = styled.div`
  width: 100%;
  height: 21px;
  ${SkeletonAnimation};
`;
export const CardSkeletonSubTitle = styled.div`
  width: 60px;
  height: 17px;
  margin: 10px 0;
  ${SkeletonAnimation};
`;
export const CardSkeletonLabelWrap = styled.div`
  width: 100%;
  height: 26px;
  margin: 10px 0;
  display: flex;
  gap: 10px;
`;
export const CardSkeletonLabel = styled.div`
  width: 80px;
  height: 26px;
  ${SkeletonAnimation};
`;

export const SkillSkeletonImg = styled.div`
  width: 30px;
  height: 30px;
  ${SkeletonAnimation};
`;

export const CardSkeletonFooter = styled.div`
  width: 100%;
  height: 21px;
  margin-top: 10px;
  ${SkeletonAnimation};
`;