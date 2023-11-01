import React from 'react'
import Header from './Component/header'
import Footer from './Component/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';

import PropertyDetail from './Component/Pages/PropertyDetail';
import Contact from './Component/Pages/Contact';
import Blog from './Component/Pages/Blog';
import About from './Component/Pages/About';
import Login from './Component/Pages/Login';
import Register from './Component/Pages/Register';
import Forgetpassword from './Component/Pages/Forgetpassword';

function app() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Forgetpassword' element={<Forgetpassword/>}/>
          <Route path='/propertyDetail' element={<PropertyDetail/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default app  
