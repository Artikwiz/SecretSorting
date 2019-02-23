export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';
export const SESSION_REGISTER = 'SESSION_REGISTER';

export const SESSION_LOGIN_SUCCEED = 'SESSION_LOGIN_SUCCEED';
export const SESSION_LOGIN_ERROR = 'SESSION_LOGIN_ERROR';

export const SESSION_REGISTER_SUCCEED = 'SESSION_REGISTER_SUCCEED';
export const SESSION_REGISTER_ERROR = 'SESSION_REGISTER_ERROR';

export const SESSION_LOAD_DATA = 'SESSION_LOAD_DATA';
export const SESSION_LOAD_DATA_SUCCEED = 'SESSION_LOAD_DATA_SUCCEED';
export const SESSION_LOAD_DATA_ERROR = 'SESSION_LOAD_DATA_ERROR';

export const sessionLogIn = (email, password) => ({
  type: SESSION_LOGIN,
  email: email,
  password: password
});

export const sessionLogOut = () => ({
  type: SESSION_LOGOUT
});

export const sessionRegister = (email, password) => ({
  type: SESSION_REGISTER,
  email: email,
  password: password
});

export const sessionLoadData = () => ({
  type: SESSION_LOAD_DATA
});
