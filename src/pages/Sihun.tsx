import React from 'react';
import Button from '../components/common/Button/Button';
import ProfileCircle from '../components/common/ProfileCircle/ProfileCircle';
import Banner, { Slide } from '../components/features/Banner/Banner';
import { pictures } from 'components/features/Banner/Pictures';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import SearchField from 'components/features/SearchField/SearchField';

const Sihun = () => {
  const handleLoginClick = () => {
    alert('로그인 버튼 클릭');
  };

  const handleLogoutClick = () => {
    alert('로그아웃 버튼 클릭');
  };

  return (
    <>
      {/* <Header isLoggedIn={true} /> */}
      <Button color="var(--success)" height="38px" onClick={handleLoginClick}>
        로그인
      </Button>
      <Button color="var(--success)" height="38px" onClick={handleLoginClick} reverse="true">
        로그인
      </Button>
      <Button color="var(--error)" height="34px" onClick={handleLogoutClick}>
        로그아웃
      </Button>
      <Button color="var(--error)" height="34px" onClick={handleLogoutClick} reverse="true">
        로그아웃
      </Button>
      <ProfileCircle size="42px" onClick={handleLoginClick} />
      <ProfileCircle
        size="150px"
        img="
        https://media.bunjang.co.kr/product/211210895_4_1674650614_w360.jpg"
      />
      <Banner>
        {pictures.map((slide, index) => (
          <Slide
            key={slide.id ? slide.id : index}
            onClick={() => {
              window.open(slide.link);
            }}
          >
            <img src={slide?.thumbnail} alt={slide?.title} />
          </Slide>
        ))}
      </Banner>
      {/* <SearchField /> */}
    </>
  );
};

export default Sihun;
