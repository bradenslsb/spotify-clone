import React from 'react'
import "./Player.css"
import Sidebar from "./Sidebar"

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />

      </div>
      <div className="footer">

      </div>
      <h1>welcome to spotify</h1>
    </div>
  )
}

export default Player
