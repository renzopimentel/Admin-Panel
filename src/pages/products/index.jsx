import React from 'react'
import Datatable from '../../components/datatable'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'

const Products = () => {
  return (
    <div className='products'>
        <Sidebar />
        <div className="productContainer">
            <Navbar />
            <Datatable />
        </div>
    </div>
  )
}

export default Products