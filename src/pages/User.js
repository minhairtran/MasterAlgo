import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Login from "../components/User/Login/Login";
import Register from "../components/User/Registration/Register";

const User = () => {
  const { login, setLogin } = useContext(UserContext);

  const showLoginOrRegistrationBox = () => {
    setLogin((prevState) => ({ isLoginOpened: !prevState.isLoginOpened }));
  };


  return (
    <>
      <div className="container">
        {login.isLoginOpened && <Login />}
        {!login.isLoginOpened && <Register />}
      </div>
      <Jump
          isLoginOpened={login.isLoginOpened}
          onClick={showLoginOrRegistrationBox.bind(this)}
        />
    </>
  );
};

export default User;

const Jump = (props) => {
  return (
    <div classname="container" onClick={props.onClick}>
      <div className="text-center padding">
        <h4 className="font-weight-bold">
          {props.isLoginOpened ? "Have not register?" : "Come back to login"}
        </h4>
      </div>
    </div>
  );
};
