import React from 'react'
// 25 minute before    29 october 2023
import { AiFillHome } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { FaMobile } from "react-icons/fa"
const About = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg"
              className="d-block w-100 bg-image"
              alt="..."
              style={{ filter: "brightness(0.3)", height: "550px" }} />

          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      <div className="container-fluid ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="">
                <a className="navbar-brand" href="#" style={{ fontWeight: "700", fontSize: "22px" }}>
                  House<span className='color' >Pick</span>
                </a>
                <div className=" px-lg-2 mt-3">
                  <h6 className='mb-3'><AiFillHome /> : 708, ILD Trade Centre, Sector- 47, Gurgaon, Haryana 122001</h6>
                  <h6 className='mb-3'> <MdEmail /> : House<span className='color'>Pick</span>@gmail.com</h6>
                  <h6 className='mb-3'><FaMobile /> : <span className='pl-1'>91 98117 50130</span></h6>
                  {/* <h6>91 98117 50130</h6> */}
                </div>
              </div>
            </div>
            <div className="col-md-8 mt-4">
              <div className="ps-3">
                <p style={{ fontWeight: "700", fontSize: "22px" }}>About The Com<span className='color'>Pany</span> </p>
              </div>
              <p><strong>Lorem ipsum dolo</strong>, sit amet consectetur adipisicing elit. Esse doloremque modi voluptate incidunt non veniam quibusdam quo dolor iure, eius, ut hic aliquam beatae eum voluptates repudiandae. Eaque, atque sed!</p>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-4  col-md-4 mt-5">
              <strong className=' text-center mb-2 '>Contact with <span className='color' >US</span>  ! </strong>
              <form action="">

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <strong>Name</strong>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />

                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <strong>Mobile</strong>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />

                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <strong>Mobile</strong>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />

                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <strong>Message</strong>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />

                </div>
                <div className='px-3'>
                  <button type="submit" className="btn  btn-serach">
                <strong>Send</strong>
                  </button>
                </div>
              </form>

            </div>

            <div className="col-lg-8 col-md-8  mt-5 mb-3">

              <strong className=' text-center '>Why to choose <span className='color' >US</span>  ! </strong>
              <div className=" card mb-3 mt-4">
                <img className='about_card' src="https://png.pngtree.com/thumb_back/fh260/background/20220101/pngtree-woman-working-with-her-laptop-image_938434.jpg" alt="" />
              </div>
              <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur architecto omnis quae iure hic obcaecati exercitationem quaerat sunt dicta, deserunt maiores, vero, quisquam commodi nam harum perspiciatis sit veniam alias.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About