import React from 'react';
import { CreateHeaderTitleWrap, CreateHeaderCenter } from './CreateHeaderWrap.styled';
import headerImg from '../../../assets/img/create-header.svg';

const CreateHeaderWrap = () => {
  return (
    <CreateHeaderCenter>
      <CreateHeaderTitleWrap>
        <h2>그룹 생성</h2>
        <p>개설하고자 하는 그룹이 있으신가요? DevMate가 필요한 목록들을 준비했습니다:)</p>
      </CreateHeaderTitleWrap>
      <img src={headerImg} />
    </CreateHeaderCenter>
  );
};

export default CreateHeaderWrap;