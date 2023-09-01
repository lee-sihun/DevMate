import React, { useEffect, useRef } from 'react';
import { InputFieldStyleWrap, Wrapper } from './InputField.styled';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import gihubIcon from '../../../assets/img/github.svg';
import blogIcon from '../../../assets/img/blog.svg';
import { SELECT_SKILLS_LIST } from 'utils/const';
import makeAnimated from 'react-select/animated';
import Select, { ActionMeta, GroupBase, MultiValue, OptionsOrGroups } from 'react-select';
import { Skill } from 'author-data';
import uuid from 'react-uuid';
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
  validate?: string;
  labelName: string;
  value?: string | Skill[];
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, labelName?: string) => void;
  skillChange?: (newValue: MultiValue<{ value: Skill; label: Skill }>, actionMeta?: ActionMeta<unknown>) => void
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

export const InputField2 = ({ validate, labelName, value, type = 'text', onChange, skillChange }: InputFieldProps2) => {

  const skills = React.useMemo(() => {
    return SELECT_SKILLS_LIST.map((item) => {
      return { value: item, label: item };
    });
  }, []);

  const animatedComponents = makeAnimated();

  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    labelRef.current?.focus();
  }, [validate]);

  return (
    <InputFieldStyleWrap $type={type} $labelName={labelName} $validate={validate} key={validate}>
      <label ref={labelRef} htmlFor={`userInfoInput${labelName}`}>
        <div>
          {
            labelName === 'Github'
              ? <img src={gihubIcon} alt="" />
              : labelName === 'Blog'
                ? <img src={blogIcon} alt="" />
                : ''
          }
          {labelName}
          {
            labelName === '닉네임' && <strong>*</strong>
          }
        </div>
        {labelName === '사용 기술'
          ? <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={skills}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                minHeight: '50px',
                border: '1px solid #D9D9D9',
              }),
            }}
            value={(value as Skill[])?.map((skill) =>
              ({ value: skill as Skill, label: skill as Skill })) as OptionsOrGroups<unknown, GroupBase<unknown>> | undefined
            }
            // onChange={(e) => dispatch(skillsChange(e as MultiValue<{ value: Skill; label: Skill }>))}
            onChange={(newValue: MultiValue<unknown>) => {
              skillChange?.(newValue as MultiValue<{ value: Skill; label: Skill }>);
            }}
          />
          : <input
            id={`userInfoInput${labelName}`}
            type={type}
            value={value || ''}
            disabled={type === 'email' ? true : false}
            onChange={(e) => {
              onChange?.(e, labelName);
            }}
            placeholder={`${labelName}${labelName === '소개글' ? '' : ' URL'}을 입력해주세요`}
            autoComplete='off'
          />
        }
      </label>
    </InputFieldStyleWrap >

  );
};

export default InputField;
