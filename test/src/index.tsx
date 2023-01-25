import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from './overmind'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const overmind = createOvermind(config)
root.render(
  <Provider value={overmind}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
