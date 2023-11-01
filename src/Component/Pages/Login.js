import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='container-fluid login-page '>
            <div className="container mt-5">
                <div className="card mb-5 login-bg">
                    <strong className='text-center mt-3'><b>Good to see you again !</b></strong>
                    <div className="row mt-3">
                        <div className="col-md-5 col-lg-5 ps-5 pb-5  login-bg-image">
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20220101/pngtree-woman-working-with-her-laptop-image_938434.jpg" alt="" />
                        </div>
                        <div className="col-md-10 col-lg-7 p-5">
                            <form className='px-2 loginform'>

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
                                        <strong>Password</strong>
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
                                        sign in
                                    </button>
                                </div>
                                <div className="row d-flex justify-content-space-between px-5 text-center mt-3 login-btn">

                                    <p>  <Link to="/Register" className='text-primary sign-text'>Sign Up</Link></p>
                                    <Link to="/Forgetpassword" className='text-primary ps-4 ps-sm-0 sign-text'>forget Pasword</Link>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
{/* <button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button> */}