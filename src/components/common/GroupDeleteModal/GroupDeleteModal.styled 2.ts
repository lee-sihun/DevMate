import { styled } from 'styled-components';

export const GroupDeleteModalWrap = styled.div`
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
export const GroupDeleteModalBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
export const GroupDeleteModalWindow = styled.div<{ $height: string }>`
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
export const GroupDeleteModalWindowTop = styled.div`
  background-color: var(--error);

  width: 100%;
  height: 50px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
`;
export const GroupDeleteModalWindowTitle = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  text-align: center;
`;

export const GroupDeleteModalWindowContents = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  .authorInfo_wrap {
    display: flex;
    gap: 20px;
    height: 64px;
    align-self: flex-start;
    img {
      width: 64px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      box-sizing: border-box;
      border: 1px solid var(--default-border);
    }
    .info_text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: var(--second-text);
    }
  }
  .warning_msg {
    width: 100%;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h3{
      font-size: 20px;
      font-weight: bold;
    }
    div{
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 16px;
      color: var(--second-text);
      & > p > strong{
        font-weight: bold;
        text-decoration: underline;
      }
      input{
        margin-top: 15px;
        width: 100%;
        box-sizing: border-box;
        padding: 16px;
        border: 1px solid var(--default-border);
        border-radius: 10px;
        outline: none;
      }
    }
  }
`;

export const GroupDeleteModalWindowMsg = styled.textarea`
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
