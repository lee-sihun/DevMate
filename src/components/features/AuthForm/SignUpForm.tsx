import React from 'react';
import { Form, Fieldset, InputField, FormBtn } from './AuthForm.styled';

interface ISignUpFormProps {
  toggleSignUpMode: () => void;
}

const SignUpForm = ({ toggleSignUpMode }: ISignUpFormProps) => {
  return (
    <Form>
      <h2>회원가입</h2>
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
          <label htmlFor="nickName">닉네임</label>
          <input type="text" id="nickName" />
          <span role="alert" aria-live="assertive"></span>
        </InputField>
        <InputField>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" />
          <span role="alert" aria-live="assertive"></span>
        </InputField>
        <InputField>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <input type="password" id="passwordConfirm" />
          <span role="alert" aria-live="assertive"></span>
        </InputField>
      </Fieldset>

      <Fieldset>
        <legend>로그인 및 회원가입</legend>
        <FormBtn type="submit">회원가입</FormBtn>
        <FormBtn type="button" $secondary onClick={toggleSignUpMode}>
          로그인
        </FormBtn>
      </Fieldset>
    </Form>
  );
};

export default SignUpForm;
