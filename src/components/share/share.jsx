import React from "react";
import "./share.css";
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share(){
 return(
    <div class="con">
    <div className="shareStylingbox">
    <div className="shareBox">
        <div className="shareInput">
       
            <input size="60" type="text" placeholder="Share Photos ,Videos and your openion here" className="shareInputField" />
        </div>
        <hr></hr>
        <div className="shareOptions">
          <div className="shareIcons">
            <PhotoSizeSelectActualIcon className="sharepic"id="pic"/>
            <span>Photos and Videos</span>
          </div>
          <div className="shareIcons">
            <LocalOfferIcon className="sharepic " id="tag"/>
            <span>Tag</span>
          </div>
          <div className="shareIcons">
            <EmojiEmotionsIcon className="sharepic " id="emoji" />
            <span>Feelings</span>

          </div>
          <div className="shareIcons">
            <button className="shareButton">Share</button>
          </div>

        </div>
    </div>
    </div>
    </div>
 )
}


