import React from "react";
import "../App.css";
import boy from "../imgs.png/boy.png";
import nurse from '../imgs.png/nurse.png';
import cockman from "../imgs.png/cockman.png";
import man from "../imgs.png/man.png";
import shopassistant from "../imgs.png/shopassistant.png";
import steward from "../imgs.png/steward.png";
import { Link } from "react-router-dom";


const account1 = [
  {
    image: boy,
    name: "Mohammad",
    followed: "sara",
  },
];

const accounts = [
  {
    image:nurse,
    name: "Rita",
    followed: "Ali",
  },
  {
    image: cockman,
    name: "kareem",
    followed: "Ahmad",
  },
  {
    image: shopassistant,
    name: "Meriam",
    followed: "Noah",
  },
  {
    image: steward,
    name: "Noor",
    followed: "Basel",
  },
  {
    image: man,
    name: "Zaid",
    followed: "Zaina",
  },
];

function Suggestions() {
  return (
    
    <div>
      
      <div
        style={{
          width: "250px",
          position: "fixed",
          right: 0,
          top: "30px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight:"50px",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          {account1.map((account, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <img
                src={account.image}
                alt={account.name}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <div style={{ marginLeft: "10px", color: "white" }}>
                <p style={{ fontWeight: "bold", textAlign: "left" , margin: "2px"}}>{account.name}</p>
                <p style={{ color: "grey", margin: "0" }}>Followed by {account.followed}</p>
              </div>
              <Link style={{textDecoration:"none", color: "blue", padding: "5px", marginLeft: "100px" }}>
                Follow
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", justifyContent: "space-between", width: "65%" }}>
          <p style={{ color: "grey", marginBottom: "5px", fontWeight: "bold", alignSelf: "flex-start" }}>
            Suggestions for you
          </p>
          <Link style={{textDecoration:"none", color: "white", marginBottom: "5px", alignSelf: "flex-end" }}>See More</Link>
        </div>
        <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
          {accounts.map((account, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "3px", 
              }}
            >
              <img
                src={account.image}
                alt={account.name}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <div style={{ marginLeft: "10px", color: "white" }}>
                <p style={{ fontWeight: "bold", textAlign: "left" , margin: "2px"}}>{account.name}</p>
                <p style={{ color: "grey", margin: "0" }}>Followed by {account.followed}</p>
              </div>
              <Link style={{textDecoration:"none", color: "blue", padding: "5px", marginLeft: "100px" }}>
                Follow
              </Link>
            </li>
            
          ))}
        </ul>
        <p style={{fontSize:"13px", color: "white", margin: "0" }}>About . Help . Press . API . Jobs . Privacy . Terms.</p>
        <p style={{fontSize:"13px",  color: "white", margin: "0" }}> Locations . Language . Meta Verified Create</p>
        <br/>
        <p style={{fontSize:"13px", color: "white", margin: "0" }}> © 2023 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
}

export default Suggestions;