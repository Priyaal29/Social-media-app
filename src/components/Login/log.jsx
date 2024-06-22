import React from "react";
import "./Login.css";
import pic from "./e.png";

export default function Login (){
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
        <input className="username registerInput"placeholder="Enter Your Username" name="Loginusername" />
      </div>
      <div  className="inputContainer">
        <input className="Password registerInput" placeholder="Enter Your Password"name="Loginpassword" />
      </div>
      <div  className="inputContainer">
        <input type="Submit" value="Login" className="registerSubmit" />
      </div>
    </form>
  </div>
  </div>
</div>
}