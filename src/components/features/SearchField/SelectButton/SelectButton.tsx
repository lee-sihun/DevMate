import React, { useState } from 'react';
import { DropdownItem, DropdownStyle, ArrowLogo, ArrowLogoWhite, SelectContainer, SelectLabelButton } from './SelectButton.styled';

interface SelectButtonProps {
  label: string;
  values: string[];
  onChange?: (value: string) => void;
}

const SelectButton = ({ label, values, onChange }: SelectButtonProps) => {
  const [currentValue, setCurrentValue] = useState('');
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (value: string) => {
    setCurrentValue(value);
  };
  const handleChange = (value: string) => {
    handleValueChange(value);
    setIsSelected(true);
    if (onChange) onChange(value);
    handleClose();
  };

  return (
    <SelectContainer>
      <SelectLabelButton $isSelected={isSelected} onClick={handleOpen}>
        {currentValue !== '' ? currentValue : label}
        {!isSelected ? <ArrowLogo /> : <ArrowLogoWhite />}
      </SelectLabelButton>
      <DropdownStyle $isVisible={open}>
        {values.map((value, index) => (
          <DropdownItem onClick={() => handleChange(value)} $active={value === currentValue} key={index}>
            {value}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
};

export default SelectButton;
