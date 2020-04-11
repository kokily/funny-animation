import React from 'react';
import { Route } from 'react-router-dom';
import { GlobalStyle } from './libs/styles'
import HomePage from './pages/HomePage';
import CirclePage from './pages/CirclePage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Route exact path="/" component={HomePage} />
      <Route path="/circle" component={CirclePage} />
    </>
  );
};

export default App;
