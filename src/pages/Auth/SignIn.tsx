import React from 'react';
import googleLogo from 'assets/img/social/google-logo.svg';
import githubLogo from 'assets/img/social/github-logo.svg';
import { Form, Fieldset, FormBtn, SocialBtn } from './Auth.styled';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from '../../components/common/InputField/InputField';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
  email: string;
  password: string;
}

const SignInForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<IFormInput>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>로그인</h2>
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
              message: '이메일이 형식에 맞지 않습니다',
            },
          })}
          error={errors.email}
          clearError={() => clearErrors('email')}
        />
        <InputField
          label="비밀번호"
          id="password"
          type="password"
          registerOptions={register('password', {
            required: '비밀번호를 입력해주세요',
          })}
          error={errors.password}
          clearError={() => clearErrors('password')}
        />
      </Fieldset>

      <Fieldset>
        <legend>로그인 및 회원가입</legend>
        <FormBtn type="submit">로그인</FormBtn>
        <FormBtn type="button" $secondary onClick={() => navigate('/signup')}>
          회원가입
        </FormBtn>
      </Fieldset>

      <Fieldset>
        <legend>소셜 로그인</legend>
        <SocialBtn type="button">
          <img src={googleLogo} alt="구글 로고" />
          <p>구글 계정으로 로그인</p>
        </SocialBtn>
        <SocialBtn type="button">
          <img src={githubLogo} alt="깃허브 로고" />
          <p>깃허브 계정으로 로그인</p>
        </SocialBtn>
      </Fieldset>
    </Form>
  );
};

export default SignInForm;
