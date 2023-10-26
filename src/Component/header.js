import React from 'react'
import  { useState, useEffect } from "react"
import './Layout.css'

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
            <a className="navbar-brand" href="#">
            
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
                  <a className="nav-link active " aria-current="page" href="#" style={{fontSize:navFont}}>
                    Home
                  </a>
                </li>
                <li className="nav-item px-lg-3"  px-lg-3>
                  <a className="nav-link" href="#"style={{fontSize:navFont}}>
                   Contact
                  </a>
                </li>
                <li className="nav-item px-lg-3"  >
                  <a className="nav-link" href="#"style={{fontSize:navFont}}>
                   Blog
                  </a>
                </li>
                <li className="nav-item  px-lg-3">
                  <a className="nav-link" href="#"style={{fontSize:navFont}}>
                    About
                  </a>
                </li>
                <li className="nav-item  px-lg-3">
                  <a className="nav-link" href="#"style={{fontSize:navFont}}>
                   New Launch 
                  </a>
                </li>
                <li className="nav-item dropdown  px-lg-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{fontSize:navFont}}
                  >
                   Buy
                  </a>
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
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{fontSize:navFont}}
                  >
                   Rent
                  </a>
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
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  )
}

export default Header