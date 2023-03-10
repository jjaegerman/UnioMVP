import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, API, Auth } from 'aws-amplify'
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);
API.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Authenticator.Provider store={store}>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&display=swap"
      rel="stylesheet"
    />
    <App />
  </Authenticator.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
