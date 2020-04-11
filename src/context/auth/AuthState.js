import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AuthReducer from './AuthReducer';
import setAuthHeader from '../../utils/setAuthHeader';

const initialState = {
  token: null,
  isAuthenicated: false,
  user: null,
  error: null,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = () => {
    const token = localStorage.token;

    setAuthHeader(token);
  };

  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/auth/register', formData, config);

      dispatch({
        type: 'register-success',
        payload: res,
      });
    } catch (err) {
      dispatch({
        type: 'register-fail',
        payload: err.response.data.message,
      });
    }
  };

  const login = (formDatat) => {
    try {
    } catch (err) {}
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenicated: state.isAuthenicated,
        loadUser,
        register,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
