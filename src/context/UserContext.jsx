import React, { createContext, useState } from "react";


export const UserContext = createContext();

const UserContextProvider = props => {
  const [login, setLogin] = useState({
    isLoginOpened: true,
    isLoginned: false
  });

  const [authentication, setAuthentication] = useState({
    isAuthenticated: false
  });

  const loggingIn = (useName, password) => {
    if (useName === "admin" && password === "admin") {
      setAuthentication((authentication = !authentication));
      setLogin((login.isLoginned = !login.isLoginned));
    }
  };

  return (
    <UserContext.Provider
      value={{ login, setLogin }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
