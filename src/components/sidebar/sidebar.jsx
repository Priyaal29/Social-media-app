import React from "react";
import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EventIcon from '@mui/icons-material/Event';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Sidebar(){
    return(
        <div className="sidebar"> 
         <div className="sidebarItems">
            <ul className="sidebarList">
                <li className="sidebarListItems">
                    <RssFeedIcon className="sidebarIcons"/>
                    <span>Feed</span>
                </li>

                <li className="sidebarListItems">
                    <ChatIcon className="sidebarIcons"/>
                    <span>Chat</span>
                </li>

                <li className="sidebarListItems">
                    <OndemandVideoIcon className="sidebarIcons"/>
                    <span>Video</span>
                </li>

                <li className="sidebarListItems">
                    <BookmarkIcon className="sidebarIcons"/>
                    <span>Bookmark</span>
                </li>
                <li className="sidebarListItems">
                    <EventIcon className="sidebarIcons"/>
                    <span>Event</span>
                </li>
                <li className="sidebarListItems">
                    <CloudUploadIcon className="sidebarIcons"/>
                    <span>Upload</span>
                </li>
                <li className="sidebarListItems">
                    <AddCircleIcon className="sidebarIcons"/>
                    <span>Add</span>
                </li>
                <li className="sidebarListItems">
                    <SettingsIcon className="sidebarIcons"/>
                    <span>Settings</span>
                </li>
                <li className="sidebarListItems">
                    <LogoutIcon className="sidebarIcons"/>
                    <span>Logout</span>
                </li> 
                <hr></hr>

                <li className="sidebarListItems">
                    <img alt="profile" className="sidebarIcons friendimg"src="https://cdn2.rsc.org.uk/sitefinity/images/education/Shakespeare-learning-Zone/caesar/timeline/julius-caesar-production-images_-2017_2017_photo-by-helen-maybanks-_c_-rsc_214171.jpg?sfvrsn=83f80421_2" ></img>
                     <span>Julius</span>
                </li> 

                <li className="sidebarListItems">
                    <img alt="profile" className="sidebarIcons friendimg"src="https://cdn2.rsc.org.uk/sitefinity/images/education/Shakespeare-learning-Zone/caesar/timeline/julius-caesar-production-images_-2017_2017_photo-by-helen-maybanks-_c_-rsc_214171.jpg?sfvrsn=83f80421_2" ></img>
                     <span>Julius</span>
                </li>
                <li className="sidebarListItems">
                    <img alt="profile" className="sidebarIcons friendimg"src="https://cdn2.rsc.org.uk/sitefinity/images/education/Shakespeare-learning-Zone/caesar/timeline/julius-caesar-production-images_-2017_2017_photo-by-helen-maybanks-_c_-rsc_214171.jpg?sfvrsn=83f80421_2" ></img>
                     <span>Julius</span>
                </li>
                <li className="sidebarListItems">
                    <img alt="profile" className="sidebarIcons friendimg"src="https://cdn2.rsc.org.uk/sitefinity/images/education/Shakespeare-learning-Zone/caesar/timeline/julius-caesar-production-images_-2017_2017_photo-by-helen-maybanks-_c_-rsc_214171.jpg?sfvrsn=83f80421_2" ></img>
                     <span>Julius</span>
                </li>
                <li className="sidebarListItems">
                    <img alt="profile" className="sidebarIcons friendimg"src="https://cdn2.rsc.org.uk/sitefinity/images/education/Shakespeare-learning-Zone/caesar/timeline/julius-caesar-production-images_-2017_2017_photo-by-helen-maybanks-_c_-rsc_214171.jpg?sfvrsn=83f80421_2" ></img>
                     <span>Julius</span>
                </li>
                <li className="sidebarListItems">
                    <img alt="profile" className="sidebarIcons friendimg"src="https://cdn2.rsc.org.uk/sitefinity/images/education/Shakespeare-learning-Zone/caesar/timeline/julius-caesar-production-images_-2017_2017_photo-by-helen-maybanks-_c_-rsc_214171.jpg?sfvrsn=83f80421_2" ></img>
                     <span>Julius</span>
                </li>
                <li className="sidebarListItems">
                    <img alt="profile" className="sidebarIcons friendimg"src="https://cdn2.rsc.org.uk/sitefinity/images/education/Shakespeare-learning-Zone/caesar/timeline/julius-caesar-production-images_-2017_2017_photo-by-helen-maybanks-_c_-rsc_214171.jpg?sfvrsn=83f80421_2" ></img>
                     <span>Julius</span>
                </li>

            </ul>
            


         </div>
        </div>
    )
}