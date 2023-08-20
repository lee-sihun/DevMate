import React from 'react';
import { Wrapper } from './InputField.styled';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  id: string;
  registerOptions: UseFormRegisterReturn;
  type?: string;
  error?: FieldError;
  onClearError?: () => void;
  defaultValue?: string;
}

const InputField = ({ label, id, type = 'text', error, registerOptions, onClearError, defaultValue = '' }: InputFieldProps) => {
  return (
    <Wrapper $hasError={!!error}>
      <label htmlFor={id}>{label}</label>
      <input {...registerOptions} type={type} id={id} name={id} onChange={onClearError} defaultValue={defaultValue} />
      {error && <span role="alert">{error.message}</span>}
    </Wrapper>
  );
};

export default InputField;
