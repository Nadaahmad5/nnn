import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import instagramlogo from "../imgs.png/instagram-logo.png";
import PhonesScreen from "./PhonesScreen";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  let myInfo={ avatar: "", bio: "" ,userName:""
};
  function handelSubmit(e) {
    e.preventDefault();
    axios
      .post("http://16.170.173.197/users/login", userData)
      .then((response) => {
        let token = response.data.token;
        myInfo={
          avatar: response.data.user.avatar,
          bio: response.data.user.bio,
          userName: response.data.user.userName
        };
        localStorage.setItem("avatar",myInfo.avatar);
        localStorage.setItem("bio",myInfo.bio);

        localStorage.setItem("userName",myInfo.userName);
        localStorage.setItem("token", token);    
            localStorage.setItem("id", response.data.user.id);



        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Grid container alignItems="center">
        <Grid item xs={6} container justifyContent="flex-end">
          <div style={{ margin: "50px 150px 0px 0px" }}>
            <PhonesScreen></PhonesScreen>
          </div>
        </Grid>
        <Grid item xs={3.5}>
          <Box
            className="signupRightTop"
            container
            maxWidth="sm"
            style={{ padding: " 15px 40px", margin: "100px 0px 0px 0px" }}
          >
            <img src={instagramlogo} style={{width:"145px", marginLeft:"80px", marginBottom:"30px"}} alt=""></img>
            <form noValidate onSubmit={handelSubmit}>
              <div className="signinInputs">
                <input
                  name="email"
                  label="Email"
                  placeholder="Email"
                  style={{
                    margin: "7px 0px",
                    width: "100%",
                    height:"30px",
                    padding: "7px",
                    fontFamily: " Poppins",
                    fontSize: "12px",
                    fontWeight: "700",
                    borderRadius: "8px",
                    borderWidth: "0px",
                  }}
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
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
                    height:"30px",
                    padding: "7px",
                    fontFamily: " Poppins",
                    fontSize: "12px",
                    fontWeight: "700",
                    borderRadius: "8px",
                    borderWidth: "0px",
                  }}
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                ></input>
                <Button
                  sx={{
                    borderRadius: "7px",
                    fontFamily: " Poppins",
                    fontSize: "15px",
                    fontWeight: "600",
                    padding: "1px 25px",
                    backgroundColor: "rgb(33, 150, 245)",
                    textTransform: "none",
                    width: "100%",
                    height:"30px",
                    margin: "7px 0px",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Log in{" "}
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
                  <span style={{color:"white", fontFamily: " Poppins"}}>or</span>
                </Divider>
              </div>
            </form>
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
                height:"30px",
              }}
              variant="contained"
            >
              Login with Facebook
            </Button>
            <Typography
              style={{
                fontFamily: " Poppins",
                fontSize: "12px",
                fontWeight: "600",
                textAlign: "center",
                marginTop: "25px",
                color: "rgb(240,240,240)",
              }}
            >
              Forgot password?
            </Typography>
          </Box>
          <Box
            className="signupRightButtom"
            container
            maxWidth="sm"
            style={{ padding: " 15px 40px", margin: "15px 0px" }}
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
              Don’t have an account?{"  "}
              <Link
                href="/signup"
                style={{
                  color: "rgb(33, 150, 243)",
                  fontFamily: " Poppins",
                  fontSize: "12px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;