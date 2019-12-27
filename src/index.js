import React from 'react';

import './pages/css/index.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { RouteMap } from './routes';
// import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * Clase que nos carga las rutas de la aplicación
 */
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const browser_router =
  <BrowserRouter basename={baseUrl}>
    <RouteMap />
  </BrowserRouter>;

ReactDOM.render(
  browser_router,
  rootElement
);

registerServiceWorker();