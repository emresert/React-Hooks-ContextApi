// UseContext import edilmeli
import React, { useContext} from 'react';
// Kullanılacak Context 
import {ThemeContext} from '../contexts/ThemeContext'
import {BookContext} from '../contexts/BookContext'




// Fonksiyonel component ile Contextapi ve Hooks
const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
   
    const {books} = useContext(BookContext)
    const theme = isLightTheme ? light : dark;
    return (
          
            <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
                <ul>
                {books.map(book =>{
                     return(
                        <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
                     )
                 })}
                    
                </ul>
         </div>
        
    );
};

export default BookList;

