import React from 'react'

const Forgetpassword = () => {
  return (
    <div>
         <div className='container-fluid login-page '>
            <div className="container mt-5">
                <div className="card mb-5 login-bg">
                    <strong className='text-center mt-3'><b>Good to see you again !</b></strong>
                    <div className="row mt-3 ">
                    <div className="col-lg-3 col-md-2"></div>

                        <div className="col-md-8 col-lg-6 p-5">
                            <form className='px-2 '>

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

                              
                                <div className='px-5'>
                                    <button type="submit" className="btn  btn-serach">
                                        sign in
                                    </button>
                                </div>
                               
                            </form>
                           
                        </div>
                        <div className="col-lg-3 col-md-8"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forgetpassword