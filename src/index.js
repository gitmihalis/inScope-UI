import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker';

import Navbar from './components/presenters/Navbar'
import Scopes from './components/containers/Scopes'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navbar />
            <Scopes />
        </div>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
