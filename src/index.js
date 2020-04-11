import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './context/auth/AuthState';

const StateContainer = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

ReactDOM.render(<StateContainer />, document.getElementById('root'));

serviceWorker.unregister();
