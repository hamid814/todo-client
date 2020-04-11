import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AuthReducer from './AuthReducer';
import setAuthHeader from '../../utils/setAuthHeader';

const initialState = {
  token: null,
  isAuthenicated: false,
  user: null,
  error: null,
  loading: true,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = async () => {
    const token = localStorage.token;

    setAuthHeader(token);

    try {
      const res = await axios.get('/api/auth/me');

      dispatch({
        type: 'user-loaded',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'auth-error',
        payload: err,
      });
    }
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

  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/auth/login', formData, config);

      dispatch({
        type: 'login-success',
        payload: res.data.token,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: 'login-fail',
        payload: err.response.data.message,
      });
    }
  };

  const logout = () => {
    dispatch({
      type: 'logout',
    });
  };

  const clearError = () => {
    dispatch({
      type: 'clear-error',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenicated: state.isAuthenicated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        token: state.token,
        loadUser,
        register,
        login,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
