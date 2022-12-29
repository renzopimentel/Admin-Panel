import React from 'react'
import Datatable from '../../components/datatable';
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
          <Datatable />
        </div>
      </div>
    </div>
  )
}

export default List