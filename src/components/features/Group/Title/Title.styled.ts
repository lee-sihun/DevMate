import { styled } from 'styled-components';

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid var(--default-border);
  box-sizing: border-box;
  padding: 0 0 20px 0;
  position: relative;
`;
export const TitleH2 = styled.h2`
  font-size: 33px;
  font-weight: bold;
`;
export const TitleSemiWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TitleAuthorWrap = styled.div<{ $cursor?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: ${({ $cursor = true }) => ($cursor ? 'pointer' : 'default')};

  img{
    width: 42px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid rgb(230,230,230);
    cursor: pointer;
  }
`;
export const TitleAuthorName = styled.div`
  font-weight: bold;
`;
export const TitleCountWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TitleAuthorInfoModal = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TitleModalWrap = styled.div`
  position: absolute;
  top: calc(100% - 10px);
  left: 0;
  width: 400px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 2px var(--box-shadow);
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;

  & > div {
    /* overflow: hidden; */
    padding-bottom: 10px;
    border-bottom: 1px solid var(--default-border);
  }
  & > div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  & > div:nth-child(2) {
    width: 100%;
    height: 80px;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      height: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--blue-light1);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--blue-regular1);
      border-radius: 10px;
    }
    div{
      flex-wrap: nowrap;
    }
  }
  & > div:nth-child(3) {
    height: 220px;
    border: none;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--blue-light1);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--blue-regular1);
      border-radius: 10px;
    }
    & > h3 {
      font-weight: bold;
      font-size: 20px;
    }
  }
`;
export const TitleModalAuthorInfoWrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
`;
