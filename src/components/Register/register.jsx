import React from "react";
import "./register.css";
import pic from "./e.png";

export default function Register() {
  return (
    <div className="Register">
      <div className="leftRegister">
        <img src={pic} alt="picture" className="RegisterImg" />
      </div>
      <div className="rightRegister">
      <div>
        <h1 className="registerHeading">Register</h1>
      </div>
      <div className="registerInput">
        <form>
          <div className="inputContainer">
            <input className="username registerInput"placeholder="Set Your Username" name="username" />
          </div>
          <div  className="inputContainer">
            <input className="Password registerInput" placeholder="Set Your Password"name="password" />
          </div>
          <div  className="inputContainer">
            <input type="Submit" value="Sign Up" className="registerSubmit" />
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
