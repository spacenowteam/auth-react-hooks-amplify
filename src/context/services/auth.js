// import service from './'

import { Auth } from 'aws-amplify';
// import { userLogin as _userLogin } from '../queries/auth/userLogin'

import { 
    CHECK_USER, 
    CHECK_USER_SUCCESS, 
    CHECK_USER_FAILURE, 
    USER_SIGN_IN, 
    USER_SIGN_IN_SUCCESS, 
    USER_SIGN_IN_FAILURE, 
    USER_SIGN_UP, 
    USER_SIGN_UP_SUCCESS, 
    USER_SIGN_UP_FAILURE, 
    USER_CONFIRM_SIGN_IN,
    USER_CONFIRM_SIGN_IN_SUCCESS,
    USER_CONFIRM_SIGN_IN_FAILURE,
    USER_CONFIRM_SIGN_UP,
    USER_CONFIRM_SIGN_UP_SUCCESS,
    USER_CONFIRM_SIGN_UP_FAILURE
} from '../actions/auth';

// export const userLogin = props => {
//     return (
//         service({
//             query: _userLogin,
//             variables: props
//         })
//     )
// }

export const userSignIn = props => async dispatch => {
    console.log("USER_SIGN_IN", props)
    dispatch({ type: USER_SIGN_IN })
    return await Auth.signIn(props.email, props.password)
        .then(async user => {
            console.log("USER_SIGN_IN_SUCCESS", user)
            await dispatch({ type: USER_SIGN_IN_SUCCESS, payload: user })
        })
        .catch(async err => {
            console.log("USER_SIGN_IN_FAILURE", err)
            await dispatch({ type: USER_SIGN_IN_FAILURE, payload: err.message })
        })
}

export const userConfirmSignIn = props => async dispatch => {
    console.log("USER_CONFIRM_SIGN_IN", props)
    dispatch({ type: USER_CONFIRM_SIGN_IN })
    return await Auth.confirmSignIn(props.user, props.code, props.mfaType)
        .then(async user => {
            console.log("USER_CONFIRM_SIGN_IN_SUCCESS", user)
            await dispatch({ type: USER_CONFIRM_SIGN_IN_SUCCESS, payload: user })
        })
        .catch(async err => {
            console.log("USER_CONFIRM_SIGN_IN_FAILURE", err)
            await dispatch({ type: USER_CONFIRM_SIGN_IN_FAILURE, payload: err.message })
        })
}

export const userSignUp = props => async dispatch => {
    console.log("USER_SIGN_UP", props)
    dispatch({ type: USER_SIGN_UP })
    return await Auth.signUp(props.username, props.password, props.email, props.phone_number)
        .then(async user => {
            console.log("USER_SIGN_UP_SUCCESS", user)
            await dispatch({ type: USER_SIGN_UP_SUCCESS, payload: user.user })
        })
        .catch(async err => {
            console.log("USER_SIGN_UP_FAILURE", err)
            await dispatch({ type: USER_SIGN_UP_FAILURE, payload: err.message })
        })
}

export const userConfirmSignUp = props => async dispatch => {
    console.log("USER_CONFIRM_SIGN_UP", props)
    dispatch({ type: USER_CONFIRM_SIGN_UP })
    return await Auth.confirmSignUp(props.username, props.code)
        .then(async () => {
            console.log("USER_CONFIRM_SIGN_UP_SUCCESS")
            await dispatch({ type: USER_CONFIRM_SIGN_UP_SUCCESS })
        })
        .catch(async err => {
            console.log("USER_CONFIRM_SIGN_UP_FAILURE", err)
            await dispatch({ type: USER_CONFIRM_SIGN_UP_FAILURE, payload: err.message })
        })
}

export const checkUser = props => async dispatch => {
    console.log("CHECK_USER")
    dispatch({ type: CHECK_USER })
    return await Auth.currentAuthenticatedUser()
        .then(async user => {
            console.log("CHECK_USER_SUCCESS", user)
            await dispatch({ type: CHECK_USER_SUCCESS, payload: user })
        })
        .catch(async err => {
            console.log("CHECK_USER_FAILURE", err)
            await dispatch({ type: CHECK_USER_FAILURE, payload: err })
        })
  }