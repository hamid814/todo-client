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
    default:
      return state;
  }
};
