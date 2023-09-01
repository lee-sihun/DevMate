import React, { useState, useEffect, useRef } from 'react';
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
  const modalRef = useRef<HTMLDivElement | null>(null);


  const handleToggle = () => {
    setOpen(!open);
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

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);
  return (
    <SelectContainer ref={modalRef}>
      <SelectLabelButton $isSelected={isSelected} onClick={handleToggle}>
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
