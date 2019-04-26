import React, { useEffect } from 'react';
import Amplify from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.css';

import awsconfig from './aws-exports';
// import { SignIn, ConfirmSignIn, SignUp, ConfirmSignUp, ForgotPassword, ForgotPasswordReset, SignOut } from './Auth';
import { SignIn, SignOut } from './Auth';
import { useAuth } from './context/providers/AuthProvider'
import { checkUser } from './context/services/auth';

Amplify.configure(awsconfig);

const CustomAuthenticator = () => (
  <React.Fragment>
    <SignIn />
    {/* <ConfirmSignIn />
    <SignUp />
    <ConfirmSignUp />
    <ForgotPassword />
    <ForgotPasswordReset /> */}
  </React.Fragment>
)


const Authentication = props => {

  const [login, dispatch] = useAuth();

  useEffect(() => {
    checkUser()(dispatch)
  }, [])
  
  return (
    <React.Fragment>
      { console.log("LOGIN ===>>> ", login.user) }
      { !login.user && <CustomAuthenticator /> }
      { login.user && <div>You are signed in as <span font="italic">{login.user.username}</span>.<SignOut /></div> }
    </React.Fragment>
  )
}

export default Authentication;
