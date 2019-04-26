import { Auth, Hub } from 'aws-amplify'

const AmplifyBridge = props => {

  checkUser = () => {
    Auth.currentAuthenticatedUser()
      .then(user => this.checkUserSuccess(user))
      .catch(err => this.checkUserError(err));
  }

  loadUserInfo = (user) => {
    Auth.currentUserInfo()
      .then(info => this.loadUserInfoSuccess(user, info))
      .catch(err => this.loadUserInfoUserError(user, err));
  }

  checkUserSuccess = (user) => {
    this.loadUserInfo(user);
  }

  checkUserError = (err) => {
    this.store.dispatch(switchUser(null));
  }

  loadUserInfoSuccess = (user) => {
    this.store.dispatch(switchUser(user));
  }

  loadUserInfoError = (user, err) => {
    this.store.dispatch(switchUser(user));
  }

}

export default AmplifyBridge
