import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import messengar from '../imgs.png/messengar-logo.png';
function Msslogo(){
    return(
        <div style={{textAlign:"center", marginTop:"120px"}}>
<Avatar style={{margin:"auto"}} alt="Remy Sharp" src={messengar} sx={{width:100, height:100}}/>
  <h2 style={{ color:"white", paddingTop:"10px"}}>Your Messages</h2>
  <h3 style={{color:"gray", paddingTop:"10px"}}> Send private photos and messages to a friend or group</h3>
  <Button variant="contained" disableElevation>
SEND MESSAGE
</Button>
</div>
)}
export default Msslogo;


