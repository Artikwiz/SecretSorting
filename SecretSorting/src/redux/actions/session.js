export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export const SESSION_LOGIN_SUCCEED = 'SESSION_LOGIN_SUCCEED';
export const SESSION_LOGIN_ERROR = 'SESSION_LOGIN_ERROR';

export const sessionLogIn = (email, password) => ({
  type: SESSION_LOGIN,
  email: email,
  password: password
});

export const sessionLogOut = () => ({
  type: SESSION_LOGOUT
});
