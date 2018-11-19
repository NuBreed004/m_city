import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import './firebase';

import Routes from './routes.js';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
