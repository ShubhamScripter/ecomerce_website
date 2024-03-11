import React from 'react';
import './Admin.css';
// import Sidebar from '../../Component/Sidebar/Sidebar.jsx';
import { Route,Routes } from 'react-router-dom';
import AddProduct from '../../Component/AddProduct/AddProduct.jsx';
import ListProduct from '../../Component/ListProduct/ListProduct.jsx';
import Sidebar from '../../Component/Sidebar/Sidebar.jsx';

const Admin = () => {
  return (
    <div className='admin'>
<Sidebar/> 
<Routes>
  <Route path='/addproduct' element={<AddProduct/>} />
  <Route path='/listproduct' element={<ListProduct/>}/>
</Routes> 
    </div>
  )
}

export default Admin
