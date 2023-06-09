import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import keycloak from './keycloak';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import * as serviceWorker from './serviceWorker';
import { ReactKeycloakProvider } from '@react-keycloak/web';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//    {/* <ReactKeycloakProvider authClient={keycloak}> */}
//       <App />
//    {/* </ReactKeycloakProvider> */}
//   </React.StrictMode>
// );

const renderApp = () => ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

// ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorkerRegistration.unregister();
keycloak.initKeycloak(renderApp);