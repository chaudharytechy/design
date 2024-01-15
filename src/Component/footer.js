import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import{FaMobile}from "react-icons/fa"

function Footer() {
  return (
    <div>
      <div className="container-fluid footer mt-3">
        <div className="container ">
          <div className="row  ">
            <div className="col-md-4 mt-3">

              <p style={{ fontWeight: "700", fontSize: "25px" }}>
                House<span className='color' >Pick</span><br />
              </p>

              <p  ><span style={{ fontWeight: "500", fontSize: "16px" }}>About The Company...</span> <br />
                <span className=''>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem quas aut optio expedita iusto pariatur vel aperiam animi!
                  Reiciendis labore, a dolores in molestias quis quaerat fugiat reprehenderit
                  suscipit iure.
                </span></p>

            </div>
            <div className="col-md-4 mt-3">
              <p className=' ' style={{ fontWeight: "700", fontSize: "25px" }}>
                Usefull Links
              </p>
              <div className='px-lg-2' >
                <ul>
                  <h6><li><Link to="/" />About</li></h6>
                  <h6><li><Link to="/" />Career</li></h6>
                  <h6><li><Link to="/" />Blog</li></h6>
                  <h6><li><Link to="/" />Team</li></h6>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-3 ">

              <p style={{ fontWeight: "700", fontSize: "25px" }}>
                Contact Us!
              </p>
              <div className=" px-lg-2">
                <h6><AiFillHome /> : 708, ILD Trade Centre, Sector- 47, Gurgaon, Haryana 122001</h6>
                <h6> <MdEmail /> : House<span className='color'>Pick</span>@gmail.com</h6>
                <h6><FaMobile /> : <span className='pl-1'>91 98117 50130</span></h6>
                {/* <h6>91 98117 50130</h6> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer