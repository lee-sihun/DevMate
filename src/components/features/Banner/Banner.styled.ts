import styled from 'styled-components';

export const SliderWrap = styled.div`
  position: relative;
  .swiper {
    /* cursor: pointer; */
    border-radius: 30px;
    width: 1200px;
    margin-top: -50px;
    margin-left: auto;
    margin-right: auto;
  }
 
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    img {
      max-width: 100%;
      height: 450px;
    }
  }

  .swiper-pagination {
      &-bullet {
        cursor: pointer;
        width: 9px;
        height: 9px;
        margin: 0 20px;
        transition: all 0.4s ease 0s;
        transform: scale(0.8);
        &:hover, &-active {
          background-color: var(--success);
          transform: scale(1.0);
          opacity: 1;
        }
      }
  }
`;