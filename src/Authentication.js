import React, { useEffect } from 'react';
import Amplify from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.css';

import awsconfig from './aws-exports';
// import { SignIn, ConfirmSignIn, SignUp, ConfirmSignUp, ForgotPassword, ForgotPasswordReset, SignOut } from './Auth';
import { SignIn, SignUp, ConfirmSignIn, ConfirmSignUp, SignOut } from './Auth';
import { useAuth } from './context/providers/AuthProvider'
import { checkUser } from './context/services/auth';

Amplify.configure(awsconfig);

const CustomAuthenticator = () => (
  <React.Fragment>
    <SignIn title={`Sign In`} />
    <SignUp title={`Sign Up`} />
    <ConfirmSignIn title={`Confirm Sign In`} />
    <ConfirmSignUp title={`Confirm Sign UP`}/>
    {/* 
    <ForgotPassword />
    <ForgotPasswordReset /> 
    */}
  </React.Fragment>
)


const Authentication = props => {

  const [auth, dispatch] = useAuth();

  useEffect(() => {
    checkUser()(dispatch)
  }, [])
  
  return (
    <React.Fragment>
      { !auth.isLoggedIn && <CustomAuthenticator /> }
      { auth.isLoggedIn && <div>You are signed in as <span font="italic">{auth.user.username}</span>.<SignOut /></div> }
    </React.Fragment>
  )
}

export default Authentication;
