import React from 'react';
import { UpdateSectionTitleH3, UpdateSectionTitleNum, UpdateSectionTitleWrap } from './UpdateSectionTitle.styled';
import { CreateSectionProps } from 'props-type';

const UpdateSectionTitle = ({ number, title }: CreateSectionProps) => {
  return (
    <UpdateSectionTitleWrap>
      <UpdateSectionTitleNum>{number ?? 1}</UpdateSectionTitleNum>
      <UpdateSectionTitleH3>{title ?? '제목 입력 영역입니다.'}</UpdateSectionTitleH3>
    </UpdateSectionTitleWrap>
  );
};

export default UpdateSectionTitle;