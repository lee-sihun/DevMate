import React from 'react';
import { Form, Fieldset, FormBtn } from './Auth.styled';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from '../../components/features/InputField/InputField';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from 'store/hooks/user.hooks';

interface IFormInput {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm<IFormInput>({ mode: 'onBlur' });

  const password = watch('password');

  const [signup, { isLoading, isError, isSuccess }] = useSignUpMutation();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    const { email, nickname, password } = data;
    const newSignUpData = {
      email,
      nickname,
      password,
    };
    signup(newSignUpData);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>회원가입</h2>
      <Fieldset>
        <legend>사용자 정보 입력</legend>
        <InputField
          label="이메일"
          id="email"
          type="email"
          registerOptions={register('email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              message: '이메일 형식이 올바르지 않습니다',
            },
          })}
          error={errors.email}
          onClearError={() => clearErrors('email')}
        />
        <InputField
          label="닉네임"
          id="nickname"
          registerOptions={register('nickname', {
            required: '닉네임을 입력해주세요',
            pattern: {
              value: /^.{3,}$/,
              message: '세 글자 이상 입력해주세요.',
            },
          })}
          error={errors.nickname}
          onClearError={() => clearErrors('nickname')}
        />
        <InputField
          label="비밀번호"
          type="password"
          id="password"
          registerOptions={register('password', {
            required: '비밀번호를 입력해주세요.',
          })}
          error={errors.password}
          onClearError={() => clearErrors('password')}
        />
        <InputField
          label="비밀번호 확인"
          type="password"
          id="passwordConfirm"
          registerOptions={register('passwordConfirm', {
            required: '비밀번호 확인을 입력해주세요.',
            validate: (value) => value === password || '비밀번호가 일치하지 않습니다.',
          })}
          error={errors.passwordConfirm}
          onClearError={() => clearErrors('passwordConfirm')}
        />
      </Fieldset>

      <Fieldset>
        <legend>로그인 및 회원가입</legend>
        <FormBtn type="submit">회원가입</FormBtn>
        <FormBtn type="button" $secondary onClick={() => navigate('/signin')}>
          로그인
        </FormBtn>
      </Fieldset>
    </Form>
  );
};

export default SignUpForm;
