// import * as React from 'react';
// import androidScreen from "../imgs.png/androidScreen.png";
// import iphoneScreen from '../imgs.png/iPhoneScreen.png'
// import { Box } from '@mui/material';
// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
// import instagram from '../imgs.png/instagram-logo.png'
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';

// export default function FifthPage() {
//     return(
//         <Box style={{backgroundColor:"black"}}>
//         <img src={androidScreen}></img>
//         <img style={{paddingRight:"35%"}} src={iphoneScreen}></img>
//         <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Box sx={{ bgcolor: '#1D1D1D', height: '90vh' , width:'80vh'}} >
//             <br></br>
//         <img style={{width:"30%"}} src={instagram}/>
//         <p style={{ color:"white"}}>sign up to see photos and videos from your friends</p>
//         <Button style={{width:"90%"}} variant="contained" startIcon={<FacebookRoundedIcon />}>
//         Login with Facebook
//       </Button>
//       <br></br>
//       <br></br>
//       <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField style={{ backgroundColor:"white", outlineColor:"black", color:"white", width:"80%"}} id="outlined-basic" label="Email" variant="outlined" />
//       <TextField style={{ backgroundColor:"white", outlineColor:"black", color:"white", width:"80%"}} id="outlined-basic" label="Username" variant="outlined" />
//       <TextField style={{ backgroundColor:"white", outlineColor:"black", color:"white", width:"80%"}} id="outlined-basic" label="Password" variant="outlined" />
//       <Button style={{width:"90%"}} variant="contained">Sign up</Button>
//       <br></br>
//       <br></br>
//       <p style={{color:"white"}}>by signing up, you agree to our Terms, Data Policy and cookies </p>
//       </Box>
//         </Box>
//         <br>
//         </br>
        
//       </Container>
//     </React.Fragment>
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Box sx={{ bgcolor: '#1D1D1D', height: '15vh', width:'80vh' }}>
//         <p style={{color:"white"}}>have an account?</p>
//         <Link href="#" underline="none">
//         {'Log in'}
//       </Link>
//         </Box>
//       </Container>
//     </React.Fragment>
//     <br>
//         </br>
//         <br>
//         </br><br>
//         </br>
//         </Box>
        
//     )
// }





import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import instagramlogo from "../imgs.png/instagram-logo.png";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

import axios from "axios";
import PhonesScreen from "./PhonesScreen";

function SignUp() {
  const navigate = useNavigate();
  let [userData, setUsrData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://16.170.173.197/users/signup", userData)
      .then(function (response) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/home");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={6.5} container justifyContent="flex-end">
          <div style={{ margin: "50px 150px 0px 0px" }}>
            <PhonesScreen></PhonesScreen>
          </div>
        </Grid>
        <Grid item xs={3.5}>
          <Box
            className="signupRightTop"
            container
            maxWidth="sm"
            style={{ padding: " 15px 25px", margin: "30px 0px 15px 0px" }}
          >
            <img src={instagramlogo} width={"145px"} alt=""></img>
            <Typography
              style={{
                fontFamily: " Poppins",
                fontSize: "11px",
                fontWeight: "600",
                textAlign: "center",
                margin: "14px 22px",
                color: "rgb(240,240,240)",
              }}
            >
              Sign up to see photos and videos from your friends
            </Typography>
            <Button
              sx={{
                borderRadius: "7px",
                fontFamily: " Poppins",
                fontSize: "15px",
                fontWeight: "600",
                padding: "1px 25px",
                backgroundColor: "rgb(33, 150, 243)",
                textTransform: "none",
                width: "100%",
              }}
              variant="contained"
            >
              Login with Facebook
            </Button>
            <Divider
              sx={{
                "&::before, &::after": {
                  borderColor: "#424242",
                },
              }}
              style={{
                margin: "15px 0px",
              }}
            >
              or
            </Divider>
            <form noValidate onSubmit={handleSubmit}>
              <div className="signupInputs">
                <input
                  name="Email"
                  required
                  label="Email"
                  placeholder="Email"
                  style={{
                    margin: "7px 0px",
                    width: "100%",
                    padding: "7px",
                    fontFamily: " Poppins",
                    fontSize: "12px",
                    fontWeight: "700",
                    borderRadius: "8px",
                    borderWidth: "0px",
                  }}
                  value={userData.email}
                  onChange={(e) => {
                    setUsrData({ ...userData, email: e.target.value });
                  }}
                ></input>

                <input
                  autoComplete="given-name"
                  name="userName"
                  required
                  label="Username"
                  placeholder="Username"
                  style={{
                    margin: "7px 0px",
                    width: "100%",
                    padding: "7px",
                    fontFamily: " Poppins",
                    fontSize: "12px",
                    fontWeight: "700",
                    borderRadius: "8px",
                    borderWidth: "0px",
                  }}
                  value={userData.userName}
                  onChange={(e) => {
                    setUsrData({ ...userData, userName: e.target.value });
                  }}
                ></input>
                <input
                  name="Password"
                  required
                  label="Password"
                  placeholder="password"
                  style={{
                    margin: "7px 0px",
                    width: "100%",
                    padding: "7px",
                    fontFamily: " Poppins",
                    fontSize: "12px",
                    fontWeight: "700",
                    borderRadius: "8px",
                    borderWidth: "0px",
                  }}
                  value={userData.password}
                  onChange={(e) => {
                    setUsrData({ ...userData, password: e.target.value });
                  }}
                ></input>
                <Button
                  type="submit"
                  sx={{
                    borderRadius: "7px",
                    fontFamily: " Poppins",
                    fontSize: "15px",
                    fontWeight: "600",
                    padding: "1px 25px",
                    backgroundColor: "rgb(33, 150, 243)",
                    textTransform: "none",
                    width: "100%",
                    margin: "7px 0px",
                  }}
                  variant="contained"
                >
                  Sign Up
                </Button>
              </div>
            </form>
            <Typography
              style={{
                fontFamily: " Poppins",
                fontSize: "11px",
                fontWeight: "600",
                textAlign: "center",
                marginTop: "10px",
                color: "rgb(240,240,240)",
              }}
            >
              By signing up, you agree to our Terms, Data Policy and Cookies
              Police
            </Typography>
          </Box>
          <Box
            className="signupRightButtom"
            container
            maxWidth="sm"
            // style={{ padding: " 15px 40px", margin: "15px 0px" }}
          >
            <Typography
              style={{
                fontFamily: " Poppins",
                fontSize: "11px",
                fontWeight: "600",
                textAlign: "center",
                margin: "10px 22px",
                color: "rgb(240,240,240)",
              }}
            >
              Have an account?{" "}
              <Link
                href="/"
                style={{
                  color: "rgb(33, 150, 243)",
                  fontFamily: " Poppins",
                  fontSize: "12px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Log In
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignUp;