import React from "react";
import "./topbar.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Topbar() {
  return (
   <div className="topbarContainer">
     <div className="topbar">
      <div className="leftTopbar">
        <h1 className="heading">Daily Social</h1>
      </div>
      <div className="middleTopbar">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <div className="inputfield">
          <input
            size="50"
            placeholder="search friends,videos and more"
            className="searchfield"
          />
        </div>
      </div>
      <div className="rightTopbar">
        <div className="icons">
         <span> Homepage</span>
        </div>

        <div className="icons">
          <span>Profile</span>
        </div>
        <div className="icons">
          {" "}
          <PeopleAltIcon />
        </div>
        <div className="icons">
          <MessageIcon />
        </div>
        <div className="icons">
          <NotificationsIcon />{" "}
        </div>

      </div>
    </div>
   </div>
  );
}

export default Topbar;
