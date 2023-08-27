import React from 'react';
import { InputFieldStyleWrap, Wrapper } from './InputField.styled';
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

interface InputFieldProps2 {
  labelName: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, labelName?:string) => void;
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

export const InputField2 = ({ labelName, value, type = 'text', onChange }: InputFieldProps2) => {
  return (
    <InputFieldStyleWrap $type={type}>
      <label htmlFor={`userInfoInput${labelName}`}>
        <div>{labelName}</div>
        <input
          id={`userInfoInput${labelName}`}
          type={type}
          value={value}
          disabled={type === 'email' ? true : false}
          onChange={(e) => {
            onChange?.(e, labelName);
          }}
          placeholder={`${labelName}을(를) 입력해주세요`}
        />
      </label>
    </InputFieldStyleWrap>

  );
};

export default InputField;
