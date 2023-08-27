import styled from 'styled-components';

export const ImageField = styled.div`
  position: relative;
  margin-bottom: 30px;

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }

  .hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;