import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

export const PageHeader = styled.header`
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;

  strong {
    color: var(--blue-regular1);
    font-weight: 600;
    font-size: 18px;
  }

  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-top: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  padding: 10px 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  button {
    flex-grow: 1;
    background-color: var(--blue-regular1);
    color: #fff;
    padding: 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button.cancle {
    background-color: #ddd;
    color: #000;
  }
`;

export const ReadOnlyField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 10px 15px 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #f7f7f7;
  margin-bottom: 20px;
  box-sizing: border-box;
  span {
    margin-bottom: 6px;
    font-size: 12px;
    color: #919191;
  }
`;

export const ImageField = styled.div`
  position: relative;
  margin-bottom: 20px;

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
