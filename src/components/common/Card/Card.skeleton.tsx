import React from 'react';
import { CardLayout, CardTextLayout, SkillImgWrap } from './Card.styled';
import {
  CardSkeletonFooter,
  CardSkeletonImg,
  CardSkeletonLabel,
  CardSkeletonLabelWrap,
  CardSkeletonSubTitle,
  CardSkeletonTitle,
  SkillSkeletonImg,
} from '../Skeleton.styled';

const CardSkeleton = () => {
  return (
    <CardLayout $hoverOn={false}>
      <CardSkeletonImg />
      <CardTextLayout>
        <CardSkeletonTitle />
        <CardSkeletonSubTitle />
        <CardSkeletonLabelWrap>
          <CardSkeletonLabel />
          <CardSkeletonLabel />
        </CardSkeletonLabelWrap>
        <CardSkeletonSubTitle />
        <SkillImgWrap>
          <SkillSkeletonImg />
          <SkillSkeletonImg />
          <SkillSkeletonImg />
        </SkillImgWrap>
        <CardSkeletonFooter />
      </CardTextLayout>
    </CardLayout>
  );
};

export default CardSkeleton;