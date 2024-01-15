import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Dashboard from './Component/Admin/Dashboard';
import PropertyDetail from './Component/Pages/PropertyDetail';
import Contact from './Component/Pages/Contact';
import Blog from './Component/Pages/Blog';
import Login from './Component/Pages/Login';
import Register from './Component/Pages/Register';
import Forgetpassword from './Component/Pages/Forgetpassword';
import Buy_property from './Component/Pages/Buy/Buy_property';
import Admin_project from './Component/Admin/Pages/Admin_project';

function app() {


  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Blog" element={<Blog/>} />
          
          <Route path="/Login" element={<Login />} />
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Forgetpassword' element={<Forgetpassword/>}/>
          <Route path='/propertyDetail' element={<PropertyDetail/>}/>
          <Route path='Buy/Buy_property' element={<Buy_property/>}/>


        {/* Admin */}

        <Route path="/Admin_dashboard" element={<Dashboard />} />
        <Route path="/Admin_project" element={<Admin_project />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default app  
