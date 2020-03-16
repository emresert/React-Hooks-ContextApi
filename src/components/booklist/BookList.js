// UseContext import edilmeli
import React, { useContext} from 'react';
// Kullanılacak Context 
import {ThemeContext} from '../contexts/ThemeContext'




// Fonksiyonel component ile Contextapi ve Hooks
const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
          
            <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
                <ul>
                    <li style={{ background: theme.ui }}>test1</li>
                    <li style={{ background: theme.ui }}>test2</li>
                    <li style={{ background: theme.ui }}>test3</li>
                </ul>
         </div>
        
    );
};

export default BookList;

