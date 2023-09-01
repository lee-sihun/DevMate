import { styled } from 'styled-components';

export const CreateFormItemWrap = styled.div<{ $maxWidth?: string }>`
  display: flex;
  flex-direction: column;
  max-width: ${({ $maxWidth }) => $maxWidth ?? '560px'};
  width: 100%;
  box-sizing: border-box;
  gap: 10px;
  position: relative;
`;

export const CreateLabel = styled.label`
  font-weight: bold;
  & > strong {
    margin-left: 5px;
    color: #ff6868;
  }
`;
export const CreateInput = styled.input`
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

export const CreateImg = styled.img`
  width: 560px;
  aspect-ratio: 16/9;
  object-fit: cover;
  cursor: pointer;
`;

export const CreateValidateMsg = styled.small`
  font-size: 10px;
  color: var(--error);
`;