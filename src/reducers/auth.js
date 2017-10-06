import {
  AUTH_LOGIN_USER_REQUEST,
  AUTH_LOGIN_USER_SUCCESS,
  AUTH_LOGIN_USER_FAILURE,
  AUTH_LOGOUT_USER,
} from '../constants';

export default function authReducer(state, action) {
  switch (action.type) {
    case AUTH_LOGIN_USER_REQUEST:
      return state.merge({
        isAuthenticating: true,
        statusText: null,
      });

    case AUTH_LOGIN_USER_SUCCESS:
      return state.merge({
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.payload.token,
        userName: action.payload.user.email,
        statusText: 'You have been successfully logged in.',
      });

    case AUTH_LOGIN_USER_FAILURE:
      return state.merge({
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: `Authentication Error: ${action.payload.status} - ${action.payload.statusText}`,
      });

    case AUTH_LOGOUT_USER:
      return state.merge({
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: 'You have been successfully logged out.',
      });

    default:
      return state;
  }
}
