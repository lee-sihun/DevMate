import React from 'react';
import Button from '../components/common/Button/Button';

const Sihun = () => {
  return (
    <>
      <Button color="var(--success)" height="38px">
        로그인
      </Button>
      <Button color="var(--error)" height="34px">
        로그아웃
      </Button>
    </>
  );
};

export default Sihun;
