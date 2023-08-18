import React from 'react';
import Button from '../components/common/Button/Button';
import Header from '../components/common/Header/Header';
import ProfileCircle from '../components/common/ProfileCircle/ProfileCircle';

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
      <ProfileCircle size="42px" onClick={handleLoginClick} />
      <ProfileCircle
        size="150px"
        img="
        https://media.bunjang.co.kr/product/211210895_4_1674650614_w360.jpg"
        onClick={handleLogoutClick}
      />
    </>
  );
};

export default Sihun;
