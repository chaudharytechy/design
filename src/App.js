import React from 'react'
import Header from './Component/header'
import Footer from './Component/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';

function app() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default app  
