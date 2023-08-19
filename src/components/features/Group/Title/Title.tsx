import React from 'react';
import { AuthorName, AuthorWrap, CountImg, CountWrap, TitleH2, TitleSection, TitleSemiWrap } from './Title.styled';
import ProfileCircle from 'components/common/ProfileCircle/ProfileCircle';
import eye from '../../../../assets/img/eye.svg';
import heart from '../../../../assets/img/heart.svg';
import { Boundary } from 'components/common/Boundary.styled';
import { CntMaxView } from 'utils/parser';

interface TitleProps {
  title: string,
  img?: string,
  name: string,
  createdAt: string,
  viewCount: number,
  wishCount: number,
}

const Title = (
  { title, img, name, createdAt, viewCount, wishCount }:
    TitleProps
) => {
  return (
    <TitleSection>
      <TitleH2>{title}</TitleH2>
      <TitleSemiWrap>
        <AuthorWrap>
          <ProfileCircle size="42px" />
          <AuthorName>{name}</AuthorName>
          <Boundary height='16px' />
          <div>{createdAt}</div>
        </AuthorWrap>
        <CountWrap>
          <CountImg src={eye} />
          <div>{CntMaxView(viewCount)}</div>
          <CountImg src={heart} />
          <div>{CntMaxView(wishCount)}</div>
        </CountWrap>
      </TitleSemiWrap>
    </TitleSection>
  );
};

export default Title;