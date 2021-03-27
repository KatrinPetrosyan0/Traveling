import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import About from './pages/about-page/about-page';
import Contact from './pages/contact-page/contact-page';
import Services from './pages/services-page/services-page';
import Flights from './pages/flights-page/flights-page';

import './styles/global.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/flights" component={Flights} />



      </Switch>
    </Router>
  );
}

export default App;
