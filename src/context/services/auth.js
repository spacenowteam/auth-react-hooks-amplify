import service from './'

import { Auth } from 'aws-amplify';
import { userLogin as _userLogin } from '../queries/auth/userLogin'

import { CHECK_USER, CHECK_USER_SUCCESS, CHECK_USER_FAILURE } from '../actions/auth';

export const userLogin = props => {
    return (
        service({
            query: _userLogin,
            variables: props
        })
    )
}

export const userSignIn = async props => {
    return await Auth.signIn(props.username, props.password)
        // .then(user => this.signInSuccess(user))
        // .catch(err => this.signInError(err))
}

export const userConfirmSignIn = async props => {
    return await Auth.confirmSignIn(props.user, props.code, props.mfaType)
        // .then(user => this.signInSuccess(user))
        // .catch(err => this.signInError(err))
}

export const checkUser = props => async dispatch => {
    console.log("CHECK_USER")
    dispatch({ type: CHECK_USER })
    return await Auth.currentAuthenticatedUser()
        .then(user => {
            console.log("CHECK_USER_SUCCESS")
            dispatch({ type: CHECK_USER_SUCCESS, payload: user })
        })
        .catch(err => {
            console.log("CHECK_USER_FAILURE")
            dispatch({ type: CHECK_USER_FAILURE, payload: 'test' })
        })
  }