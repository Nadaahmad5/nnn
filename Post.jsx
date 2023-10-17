import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from '@mui/icons-material/Send';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Divider from "@mui/material/Divider";

import PostEdit from "./PostEdit.jsx";


const options = ["None", "Atria"];

const token = localStorage.getItem("token");
function Posts() {
  const [posts, setposts] = useState([]);
  const [likes,setLikes]=useState(false)
  const [users, setusers] = useState([]);



  function handleAddLike(id) {
  handelgetlikes(id)
  console.log('uu',users)

    setLikes(!likes)
    const postId = id;
    setposts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, color: post.color == "red" ?  "white":"red" , likes:users
        };
        }
        return post ;
      });
    });
    axios
      .request({
        method: "post",
        url: `http://16.170.173.197/posts/like/${postId}`,
        data: {
          id: postId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((responses) => {
        console.log("add likes", responses);
      })
      .catch((error) => {
        console.error("Error adding like:", error);
      });
  }

 
  useEffect(() => {
    axios
      .get("http://16.170.173.197/posts", {
        headers: { Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        setposts(response.data.posts);
         console.log("p",posts)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handelgetlikes(id){
    axios
    .request({
      method: "get",
      url: `http://16.170.173.197/posts/likes/${id}`,
      data: {
        id: id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((responses) => {
      setusers(responses.data.likes.users)
    })
    .catch((error) => {
      console.error("Error getting like:", error);
    });
  }
  return (
    <div>
      {posts.map((p, index) => (
        <div key={index}>
          <div className="postheader" style={{ margin: "0px" }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <div className="postinfo">
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "nowrap",
                    p: 1,
                    maxWidth: 300,
                    borderRadius: 1,
                    alignItems: "center",
                  }}
                >
                  <div className="avatarpost">
                    <Avatar
                      alt="Travis Howard"
                      src={p.user.avatar}
                      style={{
                        backgroundColor: "black",
                        width: "37px ",
                        height: "37px",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: " Poppins",
                      fontSize: "13px",
                      fontWeight: "500",
                      paddingLeft: "8px",
                    }}
                  >
                    {p.user.userName}
                  </span>
                </Box>
              </div>
              <div className="postedit">
                <PostEdit id={p.id} setposts={setposts} posts={posts}></PostEdit>
                
              </div>
            </Grid>
          </div>
          <div className="postBody">
            <Box
             
            >
              <img
                src={p.image}
                width={500}
                style={{ border: "solid 1px gray" }}
              ></img>
            </Box>
          </div>

          <div className="postfooter">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <div className="left">
                <span onClick={() => handleAddLike(p.id)}>
                  <FavoriteBorderIcon
                    style={{
                      fontSize: "30px",
                      fontWeight: "400",
                      paddingRight: "5px",
                      color: p.color || "white",
                    }}
                  ></FavoriteBorderIcon>
                </span>
                <MapsUgcOutlinedIcon
                  style={{
                    fontSize: "30px",
                    fontWeight: "400",
                    paddingRight: "5px",
                  }}
                ></MapsUgcOutlinedIcon>
                <SendIcon
                  style={{
                    fontSize: "30px",
                    fontWeight: "400",
                    paddingRight: "5px",
                  }}
                ></SendIcon>
                
              </div>
              <div className="right">
                <BookmarkBorderOutlinedIcon></BookmarkBorderOutlinedIcon>
              </div>
            </Grid>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <span
                style={{
                  fontFamily: " Poppins",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              
              >
               
                {p.likes.length} likes
              </span>
              <span
                style={{
                  fontFamily: " Poppins",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                
                {p.user.userName}
              </span>
              <span
                style={{
                  fontFamily: " Poppins",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                {p.description}
              </span>
            </Stack>
          </div>
          <Divider
            style={{ backgroundColor: "rgb(140,140,140)", margin: "19px 0px" }}
          ></Divider>
        </div>
      ))}
    </div>
  );
}

export default Posts;