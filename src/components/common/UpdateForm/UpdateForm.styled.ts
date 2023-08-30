import { styled } from 'styled-components';

export const UpdateFormItemWrap = styled.div<{ $maxWidth?: string }>`
  display: flex;
  flex-direction: column;
  max-width: ${({ $maxWidth }) => $maxWidth ?? '560px'};
  width: 100%;
  box-sizing: border-box;
  gap: 10px;
  position: relative;
`;

export const UpdateLabel = styled.label`
  font-weight: bold;
  & > strong {
    margin-left: 5px;
    color: #ff6868;
  }
`;
export const UpdateInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 14px;
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid var(--default-border);
  background-color: white;
  outline: none;
  border-radius: 5px;
`;

export const UpdateImg = styled.img`
  width: 560px;
  aspect-ratio: 16/9;
  object-fit: cover;
  cursor: pointer;
`;

export const UpdateValidateMsg = styled.small`
  font-size: 10px;
  color: var(--error);
`;

export const UpdateContentsWrap = styled.div``;
