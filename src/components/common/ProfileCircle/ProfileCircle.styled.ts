import styled, { css } from 'styled-components';

interface ProfileBoxProps {
  size: string;
  hasPointer?: boolean;
}

interface ProfileImgProps {
  img: string;
}

const ProfileBox = styled.div<ProfileBoxProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 0px;
  border-radius: 70%;
  overflow: hidden;
  ${({ hasPointer }) =>
    hasPointer &&
    css`
      cursor: pointer;
    `}
`;

const ProfileImg = styled.div<ProfileImgProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  ${({ img }) => {
    return css`
      background-image: url(${img});
    `;
  }}
`;

export { ProfileBox, ProfileImg };
