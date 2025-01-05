import React from 'react'
import Sidebar from '../Components/Sidebar'
import {Routes, Route} from "react-router-dom"
import Addproduct from '../Components/Addproduct'
import Listproduct from '../Components/listproduct'

const Admin = () => {
  return (
    <div className='lg-flex'>
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<Addproduct />}/>
        <Route path='/listproduct'element={<Listproduct />}/>
      </Routes>
    </div>
  )
}

export default Admin
