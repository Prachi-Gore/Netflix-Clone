import React from 'react'
import './home.scss'
import Featured from '../Components/Featured/Featured'
import Navbar from '../Components/Navbar/Navbar'
import  List from '../Components/List/List'



export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <div className="listcontainer">
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      </div>

    </div>
  );
}
