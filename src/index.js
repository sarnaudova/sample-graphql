/* eslint-disable */
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import DefinedRoutes from './router/routes';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(<DefinedRoutes/>, document.getElementById('root'));
//registerServiceWorker();
