import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './More.css';
import './AdditionalEvents.css';
import './AppearanceConfirmation.css';
import './WeddingPlan.css';
import './Home.css';
import './GuestsTransport.css';
import './SiteHeader.css';
import './MapaDojazdu.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
