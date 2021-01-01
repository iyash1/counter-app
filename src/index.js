import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CounterText from './contexts/CounterText';

ReactDOM.render(
  <CounterText><App /></CounterText>,
  document.getElementById('root')
);
