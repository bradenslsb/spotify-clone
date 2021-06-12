import React from 'react'
import './Sidebar.css'
import SidebarOption from "./SidebarOption"
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from './DataLayer'

function Sidebar() {
  const[{ playlists }, dispatch] = useDataLayerValue()

  return (
    <div className="sidebar">
      <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="pic" />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar_title">PlAYLISTS</strong>
      <hr />

      <SidebarOption title="ONE PLAYLIST" />
      <SidebarOption title="Another playlist" />
      <SidebarOption title="oneagain playlist" />
      <SidebarOption title="wow playlist" />
      {playlists?.items?.map(playlist => {
        <SidebarOption title={playlist.name} />
      })}

    </div>
  )
}

export default Sidebar
