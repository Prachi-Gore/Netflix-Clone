import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useState } from 'react';

function Navbar() {
  const [isScrolled,setIsScrolled]=useState(false);
  //console.log(window.scrollY)
 window.onscroll=()=>{
setIsScrolled(window.scrollY===0?false:true);
return ()=>(window.onscroll=null)
 };
// console.log(isScrolled)
  return (
    <div className={isScrolled?"navbar scrolled":'navbar'}>
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
          <div className="dropdown">
          <ArrowDropDownIcon/>
          <div className="options">
            <span>Settings</span>
            <span>Logout</span>
          </div>
          </div>

        </div>
     </div>
     
    </div>
  )
}

export default Navbar
