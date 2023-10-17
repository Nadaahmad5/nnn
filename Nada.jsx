import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AppsIcon from '@mui/icons-material/Apps';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
// Posts images
import licensed from '../imgs.png/licensed.jpg';
import k from '../imgs.png/k.jpg'; 

// Tagged images
import c from '../imgs.png/c.jpeg';
import a from '../imgs.png/a.jpeg';
import l from '../imgs.png/l.jpeg';
import i from '../imgs.png/i.jpeg';
// // Reels images
import explorePic1 from '../imgs.png/explorePic1.avif'
import explorePic2 from '../imgs.png/explorePic2.avif';
import explorePic3 from '../imgs.png/explorePic3.avif';
import explorePic7 from '../imgs.png/explorePic7.avif';
import explorePic8 from '../imgs.png/explorePic8.avif';
// //my img
import Nada from '../imgs.png/Nada.jpeg'
import LeftSide from './LeftSide';

export default function ImageAvatars() {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [myposts, setMyPosts] = useState([]);
  const [users,setusers]=useState([])
  const [myinfo,setMyInfo]=useState()
 
  useEffect(() => {
    axios
      .request({
        method: "get",
        url: `http://16.170.173.197/posts/${id}`,
        data: {
          id: id,
        },
        headers: {
          Authorization:`Bearer ${token}`,
        },
      })
      .then((responses) => {
        const posts = responses.data.posts;
        setMyPosts(posts);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  }, []);

  const [value, setValue] = useState(0);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const postsImages = [
    { image: licensed, title: "ex1" },
    { image: k, title: "ex2" },
    
  ];
  
  const taggedImages = [
    { image: c, title: "tagged1" },
    { image: a, title: "tagged2" },
    { image: l, title: "tagged3" },
    { image: i, title: "tagged4" },
  ];
  
  const reelsImages = [
    { image: explorePic1, title: "reel1" },
    { image: explorePic2, title: "reel2" },
    { image: explorePic3, title: "reel3" },
    { image: explorePic7, title: "reel4" },
    { image: explorePic8, title: "reel5" },
  ];
  

  const images = value === 0 ? postsImages : value === 1 ? reelsImages : taggedImages;

  return (
    <>
    <LeftSide />
    <div style={containerStyle}>
      <Box style={{ backgroundColor: 'black' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar alt="My Photo" src={Nada} sx={{ width: 100, height: 100 }} />
          <span style={{ color: 'white', fontSize: '24px', fontFamily: " Poppins" }}>Nada.Haj.Ahmad</span>
          <Button style={{ backgroundColor: 'white', color: 'black', fontSize: '12px', padding: '4px 12px' }} variant="contained">
            Edit Profile
          </Button>
          <Button style={{ backgroundColor: 'white', color: 'black', fontSize: '12px', padding: '4px 12px' }} variant="contained">
            View Actions
          </Button>
          <SettingsIcon style={{ color: 'white', fontSize: '24px' }} />
        </Stack>
        <Stack direction="row" spacing={3} alignItems="center" marginLeft="140px" marginTop="-20px">
          <span style={{ color: 'white', fontSize: '18px' }}>2 Posts</span>
          <span style={{ color: 'white', fontSize: '18px' }}>142 Followers</span>
          <span style={{ color: 'white', fontSize: '18px' }}>3794 Following</span>
        </Stack>
        <br></br>
        
        <span style={{ color: 'white', fontSize: '18px' }}>{"The things You own end up owning you."}</span>
        <Tabs style={{ color: '#1D1D1D' }} value={value} onChange={handleChange} aria-label="icon position tabs example">
          <Tab style={{ color: 'white' }} icon={<AppsIcon />} iconPosition="start" label="POSTS" />
          <Tab style={{ color: 'white' }} icon={<BookmarkBorderIcon />} iconPosition="start" label="REELS" />
          <Tab style={{ color: 'white' }} icon={<AssignmentIndIcon />} iconPosition="start" label="TAGGED" />
        </Tabs>
        <ImageList sx={{ width: 450, height: 390 }} cols={3} rowHeight={165}>
  {images.map((image, index) => (
    <ImageListItem key={index}>
      <img
        srcSet={`${image.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${image.image}?w=164&h=164&fit=crop&auto=format`}
        alt={image.title}
      />
    </ImageListItem>
  ))}
</ImageList>

      </Box>
    </div>
    </>
  );
}