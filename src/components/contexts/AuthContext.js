import React, { Component,createContext } from 'react';

export const AuthContext = createContext();
export class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    }
    toogleAuth =()=>{
        this.setState({isAuthenticated : this.state.isAuthenticated})
    }
    render() {
        return (
            <div>
                <AuthContext.Provider value={{...this.state,toggleAuth : this.toggleAuth}}>
                    {this.props.children}
                </AuthContext.Provider>
            </div>
        );
    }
}

const  AuthContextConsumer = AuthContext.Consumer;

export default AuthContextConsumer;