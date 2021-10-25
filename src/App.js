import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Landing } from './pages/Landing';
import { Solicitud } from './pages/Solicitud';

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Landing />
          </Route>
          <Route path='/form' exact>
            <Solicitud />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
