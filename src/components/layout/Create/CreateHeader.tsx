import React from 'react';
import { CreateHeaderLayout } from './CreateHeader.styled';
import CreateHeaderWrap from 'components/features/CreateHeader/CreateHeaderWrap';

const CreateHeader = () => {
  return (
    <>
      {/* <CreateHeaderEmpty/> */}
      <CreateHeaderLayout>
        <CreateHeaderWrap />
      </CreateHeaderLayout>
    </>

  );
};

export default CreateHeader;