import React, { Component } from 'react';
import ThemeContextConsumer from '../contexts/ThemeContext'
import AuthContextConsumer from '../contexts/AuthContext'


class Navbar extends Component {
  
  
render() {
   
        return(
          <AuthContextConsumer>{(authContext)=>(
                  <ThemeContextConsumer>{(themeContext)=>{
                            const {isAuthenticated,toggleAuth} = authContext;
                            const {isLightTheme ,light,dark} = themeContext;
                            const theme = isLightTheme ? light : dark;
                            return (
                               <nav style={{backgroundColor:theme.ui,color:theme.syntax}}>
                                   <h1>Context App</h1>
                                   <div onClick={toggleAuth}>
                                       {isAuthenticated ? 'Logged in' : 'Logged out'}
                                   </div>
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


