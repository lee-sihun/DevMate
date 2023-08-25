import styled, { css } from 'styled-components';
import arrow from '../../../../assets/img/arrow.svg';
import arrowWhite from '../../../../assets/img/arrow-white.svg';

interface DropProps {
	$isVisible?: boolean;
	$active?: boolean;
}

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

const SelectLabelButton = styled.button<{ $isSelected?: boolean}>`
	display: flex;
	flex-direction: row;
	padding: 11px 22px;
	font-size: 24px;
	font-weight: bold;
	border-radius: 30px;
	background-color: white;
	color: #101112;
	align-items: center;
	justify-content: space-between;
	border: 1px solid #B3B3B3;
	cursor: pointer;
	${({ $isSelected }) => $isSelected &&
		css`
			background-color: var(--success);
			color: white;
			border: none;
		`}
	transition: all 0.4s ease 0s;
	&:hover {
		filter: brightness(0.8);
	}
`;

const ArrowLogo = styled.svg<{ union?: boolean}>`
  width: 20px;
  height: 17px;
  background-image: url(${arrow});
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  margin-left: 16px;
  margin-top: 5px;
`;

const ArrowLogoWhite = styled.svg`
  width: 20px;
  height: 17px;
  background-image: url(${arrowWhite});
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  margin-left: 16px;
  margin-top: 5px;
`;

const DropdownStyle = styled.div<DropProps>`
	position: absolute;
	top: 70px;
	left: 0;
	padding: 20px 17px;
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
`;

const DropdownItem = styled.div<DropProps>`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 0.3rem 0;
	font-size: 22px;
	font-weight: bold;
	color: #101112;
	border-radius: 3px;
	cursor: pointer;
	${({ $active }) => $active &&
		css`
			color: var(--success);
		`}
	&:hover, :focus, :focus:hover {
		background-color: var(--success);
		color: white;
		outline: none;
	}
`;

export { SelectContainer, SelectLabelButton, ArrowLogo, ArrowLogoWhite, DropdownStyle, DropdownItem };