import React from 'react'
import  { useState, useEffect } from "react"
import './Layout.css'
import { Link } from 'react-router-dom'

function Header() {
  

  const [navbar, setNavbar] = useState()
  const[navFont,setNavfont]=useState(null)
  const changeBackground = () => {
    // console.log(window.scrollTop)
    if (window.scrollY>=1) {
      setNavbar("10px")
      setNavfont("18px")
    } else {
      setNavbar("15px");
      setNavfont("21px")
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg d-flex justify-content-center fixed-top" style={{padding:navbar,backgroundColor:"whitesmoke"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{fontWeight:"700", fontSize:navFont}}>
            House<span className='color' >Pick</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse  justify-content-center" id="navbarNavDropdown">
              <ul className="navbar-nav  mx-5" >
                <li className="nav-item px-lg-3 font-weight-bold">
                  <Link className="nav-link active " aria-current="page" to="/" style={{fontSize:navFont}}>
                    Home
              </Link>
                </li>
                <li className="nav-item px-lg-3"  px-lg-3>
                  <Link className="nav-link" to="/Contact"style={{fontSize:navFont}}>
                   Contact
                  </Link>
                </li>
                <li className="nav-item px-lg-3"  >
                  <Link className="nav-link" to="/Blog"style={{fontSize:navFont}}>
                   Blog
                  </Link>
                </li>
                <li className="nav-item  px-lg-3">
                  <Link className="nav-link" to="/About"style={{fontSize:navFont}}>
                    About
                  </Link>
                </li>
                <li className="nav-item  px-lg-3">
                  <Link className="nav-link" to="/NewLaunch"style={{fontSize:navFont}}>
                   New Launch 
                  </Link>
                </li>
                <li className="nav-item dropdown  px-lg-3">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/Buy"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{fontSize:navFont}}
                  >
                   Buy
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" >
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown  px-lg-3">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/Rent"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{fontSize:navFont}}
                  >
                   Rent
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" >
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ms-auto px-lg-5">
                  <Link className="nav-link" to="/Login"style={{fontSize:navFont}}>
                  Login 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  )
}

export default Header