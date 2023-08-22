import React from 'react';
import { Wrapper, PageTitle, Content } from './PageTemplate.styled';
interface PageTemplateProps {
  subTitle: string;
  mainTitle: string;
  children: React.ReactNode;
}

const PageTemplate = ({ subTitle, mainTitle, children }: PageTemplateProps) => (
  <Wrapper>
    <PageTitle>
      <strong>{subTitle}</strong>
      <h2>{mainTitle}</h2>
    </PageTitle>
    <Content>{children}</Content>
  </Wrapper>
);

export default PageTemplate;
