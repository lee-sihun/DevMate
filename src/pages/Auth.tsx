import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SignInForm from '../components/features/AuthForm/SignInForm';
import SignUpForm from '../components/features/AuthForm/SignUpForm';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Auth = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const toggleSignUpMode = () => setIsSignUpMode((prev) => !prev);

  return (
    <Wrapper>
      {!isSignUpMode ? (
        <SignInForm toggleSignUpMode={toggleSignUpMode} />
      ) : (
        <SignUpForm toggleSignUpMode={toggleSignUpMode} />
      )}
    </Wrapper>
  );
};

export default Auth;
