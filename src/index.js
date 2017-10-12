import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import ScopesIndex from './components/containers/ScopesIndex'

ReactDOM.render(
    <BrowserRouter>
        <ScopesIndex />
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
