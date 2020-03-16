import React, { Component } from 'react';
import ThemeContextConsumer from '../contexts/ThemeContext'
import AuthContextConsumer from '../contexts/ThemeContext'


class Navbar extends Component {
  
  
    
    
render() {
        return(
          <AuthContextConsumer>
              {(authContext)=>(
                  <ThemeContextConsumer>
                      {
                          (themeContext)=>{
                            
                            const {isLightTheme ,light,dark} = themeContext;
                            const theme = isLightTheme ? light : dark;
                            return (
                               <nav style={{backgroundColor:theme.ui,color:theme.syntax}}>
                                   <h1>Context App</h1>
                                   <ul>
                                       <li>Home</li>
                                       <li>About</li>
                                       <li>Contact</li>
                                   </ul>
                               </nav>
                            );

                          }
                      }
                  </ThemeContextConsumer>
              )}
          </AuthContextConsumer>
        )
    }
}

export default Navbar;


