import React from 'react';
import { Wrapper } from './PageTitle.styled';

interface PageTitleProps {
  subTitle: string;
  mainTitle: string;
}

const PageTitle = ({ subTitle, mainTitle }: PageTitleProps) => (
  <Wrapper>
    <strong>{subTitle}</strong>
    <h2>{mainTitle}</h2>
  </Wrapper>
);

export default PageTitle;
