import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FullNameContextProvider from "./Context/FullNameContext"
ReactDOM.render(
  <React.StrictMode>
    <FullNameContextProvider>
    <App />
    </FullNameContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
