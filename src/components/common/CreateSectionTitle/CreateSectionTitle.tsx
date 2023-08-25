import React from 'react';
import { CreateSectionTitleH3, CreateSectionTitleNum, CreateSectionTitleWrap } from './CreateSectionTitle.styled';

interface CreateSectionTitleProps {
  number: number
  title: string
}

const CreateSectionTitle = ({ number, title }: CreateSectionTitleProps) => {
  return (
    <CreateSectionTitleWrap>
      <CreateSectionTitleNum>{number ?? 1}</CreateSectionTitleNum>
      <CreateSectionTitleH3>{title ?? '제목 입력 영역입니다.'}</CreateSectionTitleH3>
    </CreateSectionTitleWrap>
  );
};

export default CreateSectionTitle;