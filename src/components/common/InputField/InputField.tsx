import React from 'react';
import { Wrapper } from './InputField.styled';
import { FieldError } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  id: string;
  registerOptions: any;
  type?: string;
  error?: FieldError;
  clearError?: () => void;
}

const InputField = ({ label, id, type = 'text', error, registerOptions, clearError }: InputFieldProps) => {
  return (
    <Wrapper $hasError={!!error}>
      <label htmlFor={id}>{label}</label>
      <input {...registerOptions} type={type} id={id} name={id} onChange={clearError} />
      {error && <span role="alert">{error.message}</span>}
    </Wrapper>
  );
};

export default InputField;
