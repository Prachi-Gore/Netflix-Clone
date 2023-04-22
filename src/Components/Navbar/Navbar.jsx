import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Navbar() {
  return (
    <div className='navbar'>
     <div className="container">
        <div className="left">
            <img src="/Images/logo.png" alt="loading..."  />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon/>
          <span>KID</span>
          <NotificationsIcon/>
          <AccountBoxIcon style={{ marginLeft: '7px',cursor:"pointer"}}/>
          <ArrowDropDownIcon/>

        </div>
     </div>
    </div>
  )
}

export default Navbar
