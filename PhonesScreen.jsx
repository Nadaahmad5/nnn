import iphoneScreen from "../imgs.png/iPhoneScreen.png";
import androidScreen from "../imgs.png/androidScreen.png";

import React from "react";

function PhonesScreen(props) {
  const style = {
    position: "absolute",
    top: "58%",
    left: "78%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  };
  return (
    <div style={{position:'relative' }}>
      <img src={androidScreen} alt="androidScreen"  width={'200px'}  />
      <img style={style} src={iphoneScreen} alt="iPhoneScreen" width={'270px'} />
    </div>
  );
}

export default PhonesScreen;