import React from 'react';
import { UpdateHeaderTitleWrap, UpdateHeaderCenter } from './UpdateHeaderWrap.styled';
import headerImg from '../../../assets/img/update-header.svg';

const UpdateHeaderWrap = () => {
  return (
    <UpdateHeaderCenter>
      <UpdateHeaderTitleWrap>
        <h2>그룹 수정</h2>
        <p>계획에 변경이 있으신가요? 이곳에서 그룹에 대한 정보를 수정할 수 있습니다! </p>
      </UpdateHeaderTitleWrap>
      <img src={headerImg} />
    </UpdateHeaderCenter>
  );
};

export default UpdateHeaderWrap;