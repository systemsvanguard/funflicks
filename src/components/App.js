//src/components/App.js
import React from 'react';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import Page404 from './Page404';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <Page404 default />      
    </Router>
    <GlobalStyle />
  </>
)

export default App;