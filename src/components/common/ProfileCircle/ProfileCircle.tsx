import React from 'react';
import { ProfileBox, ProfileImg } from './ProfileCircle.styled';
import { StyleSheetManager } from 'styled-components';

type ProfileProps = {
  size: string;
  img?: string;
  onClick?: () => void;
  //  onClick?: (...args: any[]) => void;
};

const defaultImg = 'https://grayround.com/common/img/default_profile.png';

const ProfileCircle = ({ size, img = defaultImg, onClick }: ProfileProps) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'hasPointer'}>
      <ProfileBox size={size} onClick={onClick} hasPointer={!!onClick}>
        <ProfileImg img={img} />
      </ProfileBox>
    </StyleSheetManager>
  );
};

export default ProfileCircle;
