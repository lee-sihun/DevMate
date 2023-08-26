import { styled } from 'styled-components';
export const CheckAnimationWrap = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const CheckAnimationCircle = styled.div`
  width: 200px;
  aspect-ratio: 1/1;
  background-color: rgba(204, 226, 255, 0.7);
  /* background: linear-gradient(-45deg, #ee6666, #e77c77, #20a6d5, #23d5ab);
  background-size: 400% 400%; */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CheckAnimationCheck = styled.div`
  width: 100px;
  height: 100px;
`;
