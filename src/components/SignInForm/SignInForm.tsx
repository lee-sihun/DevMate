import React from 'react';
import styled from 'styled-components';
import googleLogo from 'assets/img/social/google-logo.svg';
import naverLogo from 'assets/img/social/naver-logo.svg';

const Form = styled.div`
  padding: 50px 30px;
  min-width: 500px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

  h2 {
    margin-bottom: 40px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
  legend {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`;

const InputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 80px;

  label {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 12px;
    color: #919191;
    pointer-events: none;
  }

  input {
    padding: 30px 10px 10px 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 16px;
    outline: none;
  }

  span {
    position: absolute;
    bottom: 0;
    left: 10px;
    font-size: 12px;
    color: #ff6868;
  }
`;

const FormBtn = styled.button<{ secondary?: boolean }>`
  background-color: ${(props) =>
    props.secondary ? '#EFEFEF' : 'var(--blue-regular1)'};
  padding: 15px 0;
  color: ${(props) => (props.secondary ? '#000' : '#fff')};
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--blue-regular1);
    color: #fff;
  }
`;

const SocialBtn = styled.button``;

const SignInForm = () => {
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
        <FormBtn type="button" secondary>
          회원가입
        </FormBtn>
      </Fieldset>

      <Fieldset>
        <legend>소셜 로그인</legend>
        <button>
          <img src={googleLogo} alt="구글 로고" />
          <p>구글 계정으로 로그인</p>
        </button>
        <button>
          <img src={naverLogo} alt="네이버 로고" />
          <p>네이버 계정으로 로그인</p>
        </button>
      </Fieldset>
    </Form>
  );
};

export default SignInForm;
