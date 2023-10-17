import React from "react";
import Grid from '@mui/material/Grid';
import Middle from "./Middle";
import LeftSide from "./LeftSide"
import Suggestions from "./Suggestions";

function FirstPage(){
    return(
        <div style={{backgroundColor:"black"}}>
            <Grid container spacing={2}>
        <Grid item xs={2.5}>
            <LeftSide/>
            </Grid>
            <Grid item xs={5.5}>
                <Middle/>
                <br/>
                <br/>
                <br/>
            </Grid>
            <Grid item xs={2.5}>
            <Suggestions/>
            </Grid>
            </Grid>
        </div>
    )
}
export default FirstPage