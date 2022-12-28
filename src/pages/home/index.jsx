import React from 'react'
// import Navbar from '../../components/navbar'
import { Sidebar } from '../../components/sidebar'
import { Navbar } from '../../components/navbar'
import "./home.scss";
import Widget from '../../components/widget/Widget';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type='user'/>
          <Widget type='order'/>
          <Widget type='earning'/>
          <Widget type='balance'/>

        </div>
      </div>
    </div>
  )
}

export default Home;