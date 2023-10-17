import React from "react";
import Story from "./Story";
import Post from "./Post";
function Middle(){
    return(
        <div style={{backgroundColor:"black", marginLeft:"5%"}}>
            <Story/>
         <Post/> 
         <Post/> 
         <Post/>   
        </div>
    )
}
export default Middle