export default (state, action) => {
  switch (action.type) {
    case 'register-success':
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        token: action.payload.data.token,
        isAuthenicated: true,
      };
    case 'register-fail':
      return {
        ...state,
        isAuthenicated: false,
        error: action.payload,
      };
    case 'login-success':
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenicated: true,
        loading: false,
        error: null,
      };
    case 'user-loaded':
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false,
        isAuthenicated: true,
      };
    case 'auth-error':
    case 'logout':
    case 'login-fail':
      localStorage.removeItem('token');
      return {
        ...state,
        loading: false,
        user: null,
        token: null,
        isAuthenicated: false,
        error: action.payload,
      };
    case 'clear-error':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
