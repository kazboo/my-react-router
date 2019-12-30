import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import UI001Page from './page/UI001Page'
import UI002Page from './page/UI002Page'

const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/'
        component={UI001Page} />
      <Route path='/about'
        component={UI002Page} />
    </div>
  </BrowserRouter>
);

export default App;
