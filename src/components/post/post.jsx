import React from "react";
import "./post.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';

export default function Posts(props){
    return(
        <div className="postBox">
            <div className="postContainer">
            <div className="postTop">
                <img src={props.profile}
                 alt="profile"className="postProfile" />
                <div className="postUsername">
                <span > {props.name}</span>
                    </div>
            </div>
            <div className="postImgBox">
                <img src={props.Post}
                alt="img" className="postImg" />
            </div>

            <div className="postBottom">
                
                <FavoriteIcon className="postIcon" id="likePost"/>
                <ModeCommentIcon className="postIcon" id="commentPost"/>
                <SendIcon  className="postIcon" id="sendPost"/>
                
                <div className="postDiscription">
                    <span>{props.description}</span>
                </div>


            </div>
            
            </div>
        </div>
    )
}