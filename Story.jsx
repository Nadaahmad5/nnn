import React from 'react';
import '../App.css';

import Singer from '../imgs.png/singer.png';
import boy from '../imgs.png/boy.png';
import nurse from '../imgs.png/nurse.png';
import man from '../imgs.png/man.png';
import steward from '../imgs.png/steward.png';
import shopassistant from '../imgs.png//shopassistant.png';

const profileImages = [
  {
    image: Singer,
    name: 'MaysaDw', 
  },
  {
    image: boy,
    name: 'AmmarNH',
  },
  {
    image: nurse,
    name: 'Rita.dr',
  },
  {
    image: man,
    name: 'Baselhaj',
  },
  {
    image: steward,
    name: 'NoorStew',
  },
  {
    image: shopassistant,
    name: 'HalaNH',
  },
  
  {
    image: nurse,
    name: 'sarahkh',
  },
//   {
//     image: boy,
//     name: 'AdamH',
//   }
];

function Story() {
  return (
    <div className="stories-bar">
      {profileImages.map((profile, index) => (
        <div key={index} className="story-item">
          <img style={{width:"60px", height:"60px"}} src={profile.image} alt={`User ${index + 1}`} />
          <p className="name">{profile.name}</p>
        </div>        
      ))}
    </div>




  );
}

export default Story;


// export default function ImageAvatars() {
//     return (
//         <span style={{color:'white', fontSize:"90%"}}>
//       <Stack direction="row" spacing={2}>
//         {/* <span style={{color:'white', fontSize:"90%"}}> */}
//         <Avatar alt="Remy Sharp" src={Singer} sx={{width:"10%", hight:"10%"}}/>
//         Nada.Haj.Ahmad
//         <Avatar alt="Travis Howard" src={Singer} sx={{width:"10%", hight:"10%"}} />
//         Nada.Haj.Ahmad
//         <Avatar alt="Cindy Baker" src={Singer} sx={{width:"10%", hight:"10%"}}/>
//             Nada.Haj.Ahmad
//         {/* </span> */}
//         {/* <Avatar alt="Remy Sharp" src={Singer} />
//         <Avatar alt="Travis Howard" src={Singer} />
//         <Avatar alt="Cindy Baker" src={Singer} /> */}
//       </Stack>
//       </span>
//     );
//   }