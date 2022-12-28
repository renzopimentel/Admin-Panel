import React from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import './list.scss';

const List = () => {
  return (
    <div>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          datatable
        </div>
      </div>
    </div>
  )
}

export default List