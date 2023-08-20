import { StylesConfig } from 'react-select';
import styled from 'styled-components';

type OptionType = {
  label: string;
  value: string;
};


export const customStyles: StylesConfig<OptionType | string, true> = {
  control: (provided, state) => ({
    ...provided,
    padding: '0 5px',
    paddingTop: '5px',
    borderColor: state.isFocused ? 'transparent' : 'transparent',
    boxShadow: 'none',
    border: 'none',
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

export const Wrapper = styled.div`
  width: 100%;
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