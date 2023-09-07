import styled from 'styled-components';
import noImg from '../../../assets/img/noData.svg';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
`;

export const NoImg = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${noImg});
  background-color: #fafafa;
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  margin-right: 9px;
  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: center;
  h3 {
    width: 1200px;
    text-align: center;
    position: absolute;
    font-size: 64px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
  }
`;