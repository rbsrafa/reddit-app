import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Layout from './pages/layout';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
