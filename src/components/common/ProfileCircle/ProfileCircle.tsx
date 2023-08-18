import React from 'react';
import { ProfileBox, ProfileImg } from './ProfileCircle.styled';

type ProfileProps = {
  size: string;
  img?: string;
  onClick?: () => void;
  //  onClick?: (...args: any[]) => void;
};

const defaultImg = 'https://grayround.com/common/img/default_profile.png';

const ProfileCircle = ({ size, img = defaultImg, onClick }: ProfileProps) => {
  return (
    <ProfileBox size={size} onClick={onClick} hasPointer={!!onClick}>
      <ProfileImg img={img} />
    </ProfileBox>
  );
};

export default ProfileCircle;
