import React from 'react';
import googleLogo from 'assets/img/social/google-logo.svg';
import naverLogo from 'assets/img/social/naver-logo.svg';
import {
  Form,
  Fieldset,
  InputField,
  FormBtn,
  SocialBtn,
} from './AuthForm.styled';

interface ISignInFormProps {
  toggleSignUpMode: () => void;
}

const SignInForm = ({ toggleSignUpMode }: ISignInFormProps) => {
  return (
    <Form>
      <h2>로그인</h2>
      <Fieldset>
        <legend>사용자 정보 입력</legend>
        <InputField>
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" />
          <span role="alert" aria-live="assertive">
            이메일 형식이 올바르지 않습니다.
          </span>
        </InputField>
        <InputField>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" />
          <span role="alert" aria-live="assertive"></span>
        </InputField>
      </Fieldset>

      <Fieldset>
        <legend>로그인 및 회원가입</legend>
        <FormBtn type="submit">로그인</FormBtn>
        <FormBtn type="button" $secondary onClick={toggleSignUpMode}>
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
          <img src={naverLogo} alt="네이버 로고" />
          <p>네이버 계정으로 로그인</p>
        </SocialBtn>
      </Fieldset>
    </Form>
  );
};

export default SignInForm;
