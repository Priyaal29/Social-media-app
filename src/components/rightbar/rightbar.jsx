import React from "react";
import "./rightbar.css";
import Logo from "./Discover.png";
import Online from "../friends List/online";


export default function Rightbar(){
    return(
        <div className="rightbar"> 
         <div className="discoverContainer">
            <img src={Logo} alt="discover" className="discoverImg" />
         </div>
         <hr></hr>
         <div>
            <Online />
         </div>
        </div>
    )
}