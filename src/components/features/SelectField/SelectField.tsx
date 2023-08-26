import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { Wrapper, customStyles } from './SelectField.styled';

type OptionType = {
  label: string;
  value: string;
};

interface SelectFieldProps {
  field: {
    onChange: (...event: any[]) => void;
    onBlur: () => void;
    name: string;
    value?: OptionType[];
  };
}

const SelectField = ({ field }: SelectFieldProps) => {
  return (
    <Wrapper>
      <span>기술스택</span>
      <CreatableSelect
        {...field}
        value={field.value || []}
        options={[
          { value: 'javascript', label: 'JavaScript' },
          { value: 'react', label: 'React' },
        ]}
        isMulti={true}
        styles={customStyles}
      />
    </Wrapper>
  );
};

export default SelectField;
