import React, { ReactNode } from 'react'; // ReactNode를 가져옵니다.
import { SliderWrap } from './Banner.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
// import { SwiperOptions } from 'swiper/types';

// 필요한 Swiper 모듈을 사용합니다.
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

interface BannerProps {
  children: ReactNode; // children의 타입을 ReactNode로 지정합니다.
  onClick?: () => void;
}

const Banner = ({ children, onClick }: BannerProps) => {
  const sliderOptions = {
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    navigation: false,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  return (
    <SliderWrap>
      <Swiper {...sliderOptions} onClick={onClick}>{children}</Swiper>
    </SliderWrap>
  );
};

export { SwiperSlide as Slide };
export default Banner;
