import React, { useState } from 'react';
import './SignUp.css';

import { CHANGE_SCREEN } from '../../context/actions/auth'
import { useAuth } from '../../context/providers/AuthProvider'
import { userSignUp } from '../../context/services/auth';

const SignUp = props =>  {

  const [auth, dispatch] = useAuth();

  const [_signUp, _setSignUp] = useState({
    username: "",
    password: "",
    email: "",
    phone_number: ""
  });

  const signUp = async () => {
    await userSignUp(_signUp)(dispatch)
    console.log("SIGN UP ===> USER_CONFIRM_SIGN_UP")
    changeScreen(`CONFIRM_SIGN_UP`)
  }

  const changeScreen = (_screen) => {
    dispatch({ type: CHANGE_SCREEN, payload: _screen })
  }

  return (

    (auth.screen === 'SIGN_UP') ?

      <div className={`container`}>
        <h1>{props.title}</h1>
        <div className={`form-group`}>
          <label className={`form-check-label`}>Username</label>
          <input className={`form-control`} type="text" placeholder="Username" defaultValue={ _signUp.username || '' } onChange={e => _setSignUp({ ..._signUp, username: e.target.value })} autoFocus />
        </div>

        <div className={`form-group`}>
          <label className={`form-check-label`}>Password</label>
          <input className={`form-control`} type="password" placeholder="Password" defaultValue={ _signUp.password || '' } onChange={e => _setSignUp({ ..._signUp, password: e.target.value })} autoFocus />
        </div>

        <div className={`form-group`}>
          <label className={`form-check-label`}>Email</label>
          <input className={`form-control`} type="email" placeholder="Email address" defaultValue={ _signUp.email || '' } onChange={e => _setSignUp({ ..._signUp, email: e.target.value })} autoFocus />
        </div>

        <div className={`form-group`}>
          <label className={`form-check-label`}>Phone</label>
          <input className={`form-control`} type="tel" placeholder="Phone number" defaultValue={ _signUp.phone_number || '' } onChange={e => _setSignUp({ ..._signUp, phone_number: e.target.value })} autoFocus />
        </div>

        <div className="form-row">
          <div className="col">
            <button className={`btn btn-primary`} onClick={() => changeScreen("SIGN_IN")}>
              Back to sign in
            </button>
          </div>
          <div className="col">
            <button className={`btn btn-primary`} onClick={() => changeScreen("CONFIRM_SIGN_UP")}>
              Confirm a code
            </button>
          </div>
        </div>
        <button className={`btn btn-primary`} onClick={signUp}>
          Create account
        </button>
        { auth.error && <div className="alert alert-danger" role="alert">{auth.error}</div> }
      </div>

    : null
  )
}

export default SignUp;