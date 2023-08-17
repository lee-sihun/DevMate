import React from 'react';
import Button from '../components/common/Button/Button';
import Header from '../components/common/Header/Header';

const Sihun = () => {
  const handleLoginClick = () => {
    alert('로그인 버튼 클릭');
  };

  const handleLogoutClick = () => {
    alert('로그아웃 버튼 클릭');
  };

  return (
    <>
      <Header />
      <Button color="var(--success)" height="38px" onClick={handleLoginClick}>
        로그인
      </Button>
      <Button
        color="var(--success)"
        height="38px"
        onClick={handleLoginClick}
        reverse
      >
        로그인
      </Button>
      <Button color="var(--error)" height="34px" onClick={handleLogoutClick}>
        로그아웃
      </Button>
      <Button
        color="var(--error)"
        height="34px"
        onClick={handleLogoutClick}
        reverse
      >
        로그아웃
      </Button>
    </>
  );
};

export default Sihun;
