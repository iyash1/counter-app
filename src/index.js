import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CounterContextProvider from './contexts/CounterText';

ReactDOM.render(
  <CounterContextProvider><App /></CounterContextProvider>,
  document.getElementById('root')
);
