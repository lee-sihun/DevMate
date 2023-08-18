import React from 'react';
import { TitleSection } from './Title.styled';
import ProfileCircle from 'components/common/ProfileCircle/ProfileCircle';

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
      <h2>{title}</h2>
      <div>
        <div>
          <ProfileCircle size="42px" />
          <div>{name}</div>
          <div>{createdAt}</div>
        </div>
        <div>
          <div>{viewCount}</div>
          <div>{wishCount}</div>
        </div>
      </div>
    </TitleSection>
  );
};

export default Title;