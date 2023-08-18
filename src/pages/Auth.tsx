import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SignInForm from '../components/SignInForm/SignInForm';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Auth = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const toggleAccount = () => setIsSignUpMode((prev) => !prev);

  return (
    <Wrapper>
      <SignInForm />
      {/* {!isSignUpMode ? (
          // <SignIn toggleAccount={toggleAccount} />
        ) : (
          <NewAccount toggleAccount={toggleAccount} />
        )} */}
    </Wrapper>
  );
};
export default Auth;
