import React, { Component, createContext } from 'react';

export const LoginContext = createContext();

class LoginContextProvider extends Component {
    state={
        isLoginning: false,
        isLoginned: false,
      }

    handleIsLoginning = () => {
        const isLoginning = true;
        this.setState({isLoginning});
    }
    
    render() { 
        return ( <LoginContext.Provider value={{...this.state, onLoginning: this.handleIsLoginning}}>
            {this.props.children}
        </LoginContext.Provider> );
    }
}
 
export default LoginContextProvider;