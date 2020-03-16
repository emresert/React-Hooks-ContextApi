import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/root/App';
import * as serviceWorker from './serviceWorker';


import {ThemeContextProvider} from './components/contexts/ThemeContext'
import { AuthContextProvider } from './components/contexts/AuthContext';

ReactDOM.render(
     
    
        <AuthContextProvider>
            <ThemeContextProvider>
             <App />
             </ThemeContextProvider>
        </AuthContextProvider>
   

, document.getElementById('root'));


serviceWorker.unregister();
