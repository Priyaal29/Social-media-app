import React from "react";
import "./App.css";
import Topbar from "./components/topbar/topbar.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Rightbar from "./components/rightbar/rightbar.jsx";
import Feed from "./components/feed/feed.jsx";



function App(){
    return(
      <div className="container">
     <div className="top">
       <div className="maintopbar"><Topbar /></div> 
     </div>

      <div className="body">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
  
     </div>

     
    );
}

export default App;