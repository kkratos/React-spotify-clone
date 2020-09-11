import React from "react";
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body'
import Footer from './footer'

function player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
          <Sidebar />
          <Body spotify={spotify}/>
        {/* Sidebar */}
        {/* Body */}

      </div>
    <Footer/>
    </div>
  );
}

export default player;
