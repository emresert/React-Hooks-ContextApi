import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/root/App';
import * as serviceWorker from './serviceWorker';


import {ThemeContextProvider} from './components/contexts/ThemeContext'

ReactDOM.render(
     
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>

, document.getElementById('root'));


serviceWorker.unregister();
