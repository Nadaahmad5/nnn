import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CssBaseline from "@mui/material/CssBaseline";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from "@mui/icons-material/Edit";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CloseIcon from '@mui/icons-material/Close';
import HideSourceOutlinedIcon from '@mui/icons-material/HideSourceOutlined';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
function PostEdit({ id,setposts,posts}) {
 

  function gettposts(){
    
  axios
  .get("http://16.170.173.197/posts", {
    headers: { Authorization: `Bearer ${token}`},
  })
  .then(function (response) {
    setposts(response.data.posts);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const token = localStorage.getItem("token");


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handeldelete(pId) {
    axios
    .request({
      method: "delete",
      url: `http://16.170.173.197/posts/${pId}`,
      data: {
        id: pId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
        console.log(response)
      const updatedPosts = posts.filter((post) => {
        return post.id !== pId;
      });
      setposts(updatedPosts);
    })
    .catch((error) => {
      console.error("Error deleting post:", error);
      alert('You do not have the permissions')

    });
    handleClose()
  }

  const handleEditPost = (pId) => {
    const newDiscraption = prompt("please add the new disc");

    axios
      .request({
        method: "put",
        url: `http://16.170.173.197/posts/${pId}`,
        data: {
          description: newDiscraption,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    
      .then((response) => {
        console.log(response);
        const updatedPosts = posts.map((post) => {
         if( post.id == pId)
         return {...post,description:newDiscraption}
        else
        return post
        });
        setposts(updatedPosts);
        console.log(updatedPosts)
      })
      .catch((error) => {
        console.error("Error Editing post:", error);
        alert('You do not have the permissions')
      });
      handleClose()

  };
  function handleHideLikes(pId) {
    axios
    .request({
      method: "hide",
      url: `http://16.170.173.197/posts/${pId}`,
      data: {
        id: pId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
        console.log(response)
      const updatedPosts = posts.filter((post) => {
        return post.id !== pId;
      });
      setposts(updatedPosts);
    })
    .catch((error) => {
      console.error("Error Hiding Likes:", error);
      alert('You do not have the permissions')

    });
    handleClose()
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          

          <MenuItem

          >
            <DeleteIcon
              sx={{ fontSize: "1.5rem", marginRight: "9px", color: "red" }}
            />
            <span onClick={() => handeldelete(id)} style={{ color: "red" }}>
              {" "}
              Delete
            </span>
          </MenuItem>
          <MenuItem onClick={() => handleEditPost(id)}>
            <EditOutlinedIcon sx={{ fontSize: "1.5rem", marginRight: "9px" }} />
            <span> Edit</span>
          </MenuItem>
          <MenuItem onClick={() => handleHideLikes(id)}>
            <HideSourceOutlinedIcon sx={{ fontSize: "1.5rem", marginRight: "9px" }} />
            <span> Hide likes</span>
            </MenuItem>
          <MenuItem onClick={handleClose}>
            <CloseIcon
              sx={{ fontSize: "1.5rem", marginRight: "9px" }}
            />
            <span> cancel</span>
          </MenuItem>
          
        </Menu>
      </ThemeProvider>
    </div>
  );
}

export default PostEdit;