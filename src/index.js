import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/root/App';
import * as serviceWorker from './serviceWorker';


import {ThemeContextProvider} from './components/contexts/ThemeContext'
import { AuthContextProvider } from './components/contexts/AuthContext';
import  BookContextProvider from './components/contexts/BookContext'

ReactDOM.render(
     
    
        <AuthContextProvider>
            <ThemeContextProvider>
            <BookContextProvider>
             <App />
             </BookContextProvider>
             </ThemeContextProvider>
        </AuthContextProvider>
   

, document.getElementById('root'));


serviceWorker.unregister();
