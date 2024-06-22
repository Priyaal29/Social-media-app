import React from "react";
import "./feed.css";
import Share from "../share/share";
import Posts from "../post/post";
import users from "./users";

function CreatePost(users){
    return(
        <Posts 
    key={users.id}
    name={users.name}
    profile={users.imgProfile}
    Post={users.imgPost}
    description={users.description}
    />
    );
}



export default function Feed(){
   
    return(
        <div className="feed"> 
           <Share />
           
           {
            users.map(CreatePost)
           }
           
        </div>
        
    )
}
