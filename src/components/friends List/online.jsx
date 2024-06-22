import React from "react";
import "./online.css";

export default function Online (){
    return(
        <div className="onlineBox">
            <div className="onlineHeading">
                <span>Online Friends</span>
            </div>
            <div className="OnlineFriendsListbox">
                <ul className="OnlineFriendsList">
                <li className="OnlineListItems">
                    <img alt="profile" className="onlineIcons friendimg"src="https://cdn2.rsc.org.uk/sitefinity/images/education/Shakespeare-learning-Zone/caesar/timeline/julius-caesar-production-images_-2017_2017_photo-by-helen-maybanks-_c_-rsc_214171.jpg?sfvrsn=83f80421_2" ></img>
                     <span className="onlineName">Julius</span>
                </li> 

                

                </ul>
            </div>
        </div>
    )
}