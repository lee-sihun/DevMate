import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInMutation } from 'store/hooks/user.hooks';
import { SignUpSuccessWrap } from './Auth.styled';

const SignUpSuccess = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [singIn] = useSignInMutation();

  const beforeUrl = location.state?.beforeUrl;
  const data = location.state?.data;

  const signInHandler = () => {
    // console.log(data, beforeUrl);
    singIn(data);
    navigate('/');
  };

  useEffect(() => {
    beforeUrl !== 'signup' && navigate('/');
  }, []);

  return (
    <SignUpSuccessWrap>
      <div>
        회원가입에 성공했습니다!!
      </div>
      <button onClick={signInHandler}>로그인하기</button>
    </SignUpSuccessWrap>
  );
};

export default SignUpSuccess;