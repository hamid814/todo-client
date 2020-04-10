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
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} compoennt={Home} />
          <Route path={`${process.env.PUBLIC_URL}/register`} compoennt={Register} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
