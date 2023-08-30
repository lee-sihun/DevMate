import React from 'react';
import { UpdateHeaderLayout } from './UpdateHeader.styled';
import UpdateHeaderWrap from 'components/features/UpdateHeader/UpdateHeaderWrap';

const UpdateHeader = () => {
  return (
    <>
      {/* <UpdateHeaderEmpty/> */}
      <UpdateHeaderLayout>
        <UpdateHeaderWrap />
      </UpdateHeaderLayout>
    </>

  );
};

export default UpdateHeader;