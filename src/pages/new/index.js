import React from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import './new.scss'

const New = () => {
  return (
    <div>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          New
        </div>
      </div>
    </div>
  )
}

export default New