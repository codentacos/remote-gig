import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/app.scss';
import * as serviceWorker from './serviceWorker';

// Seed Data
import { seedData } from './seed';

ReactDOM.render(
  <React.StrictMode>
    <App 
      seedData={seedData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
