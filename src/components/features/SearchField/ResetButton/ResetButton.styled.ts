import styled from 'styled-components';
import resetIcon from '../../../../assets/img/reset.svg';

const Reset = styled.button`
	display: flex;
	flex-direction: row;
	padding: 11px 22px;
	font-size: 24px;
	font-weight: bold;
	border-radius: 30px;
	background-color: var(--error);
	color: white;
	align-items: center;
	justify-content: space-between;
	border: none;
	cursor: pointer;
	transition: all 0.4s ease 0s;
	&:hover {
		filter: brightness(0.8);
	}
`;

const ResetIcon = styled.svg`
  width: 24px;
  height: 24px;
  background-image: url(${resetIcon});
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  margin-right: 16px;
`;

export { Reset, ResetIcon };