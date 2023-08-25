import { styled } from 'styled-components';

export const SupportModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SupportModalBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
export const SupportModalWindow = styled.div<{ $height: string }>`
  background-color: white;
  width: 700px;
  height: ${({ $height }) => $height ?? '800px'};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 2px var(--box-shadow);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SupportModalWindowTop = styled.div`
  background-color: var(--blue-regular1);

  width: 100%;
  height: 50px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
`;
export const SupportModalWindowTitle = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  text-align: center;
`;

export const SupportModalWindowContents = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const SupportModalWindowMsg = styled.textarea`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid var(--default-border);
  outline: none;
  overflow-y: scroll;
  resize: none;
  box-sizing: border-box;
  padding: 20px;
  &::-webkit-scrollbar {
    height: 10px;
    cursor: default;
  }
`;
