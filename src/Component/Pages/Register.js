import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='container-fluid login-page '>
    <div className="container mt-5">
        <div className="card mb-5 login-bg">
            <strong className='text-center mt-3'><b>Good to see you again !</b></strong>
            <div className="row mt-2">
                <div className="col-md-5 col-lg-5 mt-5  ps-5  login-bg-image">
                    <img className='mt-5' src="https://png.pngtree.com/thumb_back/fh260/background/20220101/pngtree-woman-working-with-her-laptop-image_938434.jpg" alt="" />
                </div>
                <div className="col-md-10 col-lg-7 p-5">
                   
                <form>
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
                                    <div className="mb-3 ">
                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                             <strong>Email Address</strong> 
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
    
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                        <strong>Mobile Number</strong> 
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                        <strong>Password</strong> 
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                           <strong>Confirm Password</strong> 
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                        />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                        <strong>Check me out</strong> 
                                        </label>
                                    </div>
                                    <div className='px-5'>
                                    <button type="submit" className="btn  btn-serach">
                                        sign up
                                    </button>
                                    </div>
                                </form>
                                <div className=" d-flex justify-content-space-between px-5 text-center  login-btn">
                                    <Link to="/Login" className='text-primary '>Sign in</Link>
                                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register

