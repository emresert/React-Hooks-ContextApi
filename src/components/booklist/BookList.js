import React, { Component } from 'react';
import ThemeContextConsumer from '../contexts/ThemeContext'


class BookList extends Component {

    render() {
        return (
            
                    <ThemeContextConsumer>
                        {
                            (themeContext) => {
                                const { isLightTheme, light, dark } = themeContext;
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

                            }
                        }
                    </ThemeContextConsumer>
           

        )


    }
}

export default BookList;