import React from 'react';
import { StylesConfig } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { ControllerRenderProps } from 'react-hook-form';
import styled from 'styled-components';

type OptionType = {
  label: string;
  value: string;
};

// interface SelectFieldProps {
//   field: ControllerRenderProps<OptionType[], unknown>;
// }

const customStyles: StylesConfig<OptionType | string, true> = {
  control: (provided, state) => ({
    ...provided,
    padding: '0 5px',
    paddingTop:'5px',
    borderColor: state.isFocused ? 'transparent' : 'transparent', // Border를 없앴습니다.
    boxShadow: 'none', // Focus 시의 아웃라인을 없앴습니다.
    border: 'none', // Border를 없앴습니다.
    '&:hover': {
      borderColor: 'transparent',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '16px',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '16px',
  }),
  input: (provided) => ({
    ...provided,
    fontSize: '16px',
  }),
};

const Wrapper = styled.div`
  background-color: #fff;
  padding: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;

  span {
    margin-bottom: 6px;
    margin-left: 15px;
    font-size: 12px;
    color: #919191;
  }
`;

const SelectField = ({ field }: any) => {
  const { ref, ...restField } = field;
  return (
    <Wrapper>
      <span>기술스택</span>
      <CreatableSelect
        {...restField}
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
