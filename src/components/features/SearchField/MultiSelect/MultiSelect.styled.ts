import styled, { css } from 'styled-components';

export const SelectWrap = styled.div`
  .multiSelectContainer {
  }

  .searchWrapper {
    max-width: 100%;
    /* min-height: 50px; */
    background-color: white;
    /* border-radius: 10px; */
    /* border: 1px solid #B3B3B3; */
    border: none;
    border-bottom: 1px solid #B3B3B3; 
    border-radius: 0;
    display: flex;
    flex-wrap: wrap;
    z-index: 999; /* 높은 값을 설정하여 가장 앞에 표시 */
  }

  .multiSelectContainer input {
    font-size: 22px;
    margin-left: 5px;
    margin-top: 0;
    padding: 0 0;
    z-index: 999; /* 높은 값을 설정하여 가장 앞에 표시 */
    &::placeholder {
      color: #B3B3B3; // placeholder 텍스트 색상 변경
      font-weight: bold; // placeholder 텍스트의 굵기 변경
    }
  }

  .chip {
    min-height: 34px;
    background-color: var(--success);
    border-radius: 30px;
    color: white;
    font-size: 22px;
    margin-bottom: 4px;
  }

  .closeIcon {
    width: 22px;
    height: 18px;
    margin-left: 5px;
  }

  .multiSelectContainer ul {
    border-color: #B3B3B3;
    margin-top: 5px;
    border: none;
  }
  .option {
    display: flex;
    
  }   
  .optionContainer {
    font-size: 22px;
  }
  .optionListContainer {
    position: relative;
  }

  .checkbox {
    width: 22px;
    height: 22px;
    margin-bottom: 0px;
  }

  .displayNone {
    display: block;
  }
`;

interface DropProps {
	$isVisible?: boolean;
	$active?: boolean;
}

export const DropdownStyle = styled.div<DropProps>`
  display: flex;
	position: absolute;
  min-width: 450px;
  height: auto;
	top: 70px;
	left: 0;
	padding: 10px 10px;
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	background: white;
	border: 1px solid #B3B3B3;
  z-index: 999; /* 높은 값을 설정하여 가장 앞에 표시 */
	${({ $isVisible }) => $isVisible !== true && 
		css`
			visibility: hidden;
		`}
    /* 추가한 부분 */
`;