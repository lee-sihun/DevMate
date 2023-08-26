import React from 'react';
import { CheckAnimationCheck, CheckAnimationCircle, CheckAnimationWrap } from './CheckAnimation.styled';

const CheckAnimation = ({ setModal }: { setModal: React.Dispatch<React.SetStateAction<boolean>> }) => {

  React.useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 2000);
  }, []);
  return (
    <CheckAnimationWrap>
      <CheckAnimationCircle>
        <CheckAnimationCheck>
          <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <path id="check" d="M20 50 L40 70 L80 30" fill="none" stroke="#002DCC" strokeWidth="10" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" from="0" to="100" dur="1s" fill="freeze" />
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" />
            </path>
          </svg>
        </CheckAnimationCheck>
      </CheckAnimationCircle>
    </CheckAnimationWrap>
  );
};

export default CheckAnimation;