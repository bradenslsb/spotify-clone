import React from 'react'
import Header from "./Header"
import "./Body.css"

function Body({ spotify }) {
  return (
    <div className="body">
      <h1>body</h1>
      <Header spotify={spotify} />
    </div>
  )
}

export default Body
