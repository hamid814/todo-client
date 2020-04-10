import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Home from './components/pages/Home';
import Register from './components/pages/Register';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/register`} component={Register} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
