import "./App.css";
import React from "react"; 

import FirstPage from "./component1/FirstPage";
import SecPage from "./component1/SecPage";
import MessagesPage from "./component1/MessagesPage";
import Nada from "./component1/Nada";
import SignUpPage from './component1/SignUpPage'
import LogInPage from "./component1/LogInPage";


import { Route, Routes } from "react-router-dom";
import CreatePostModal from "./component1/CreatePostModal";
import LeftSide from "./component1/LeftSide";

function App() {
  return (
    <>
    <div className="App"> 
    {/* <LogInPage/> */}
      {/* <LeftSide /> */}
      </div>
      <Routes>
        <Route path="/home" element={<FirstPage />} />
        <Route path="/explore" element={<SecPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/create" element={<CreatePostModal />} />
        <Route path="/profile" element={<Nada />} />
         <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    
    </>
  );
}

export default App;
