// 
import React from 'react';
import '../Layout.css';

function Home() {
  return (
    <>
      {/* slider section  */}
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
              style={{ filter: "brightness(0.3)", height: "550px" }}/>

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
      {/* serch section */}
      <div>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-10'>
              <div className='row'>
                <div className='col-md-8'>
                  <form>
                    <input className='serach-box' type='text' placeholder='serch for city , locality andlandmark' />
                  </form>
                </div>
                <div className='col-md-4 button'>
                  <button className='btn-serach btn mt-2 btn-lg  '>Search</button>
                </div>
              </div>

            </div>
            <div className='col-md-1'></div>
          </div>

        </div>
      </div>

      {/* service section */}
      <div className="container mt-3">
        <div className="row">
          <h1 className=" d-sm-flex justify-content-sm-center  justify-content-lg-start service">Our Services </h1>
          <div className="col-md-4  mt-1">
            <div className="card  box text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-header" style={{ fontWeight: 600 }}>Loans</div>
              <div className="card-body">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="card box text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-header" style={{ fontWeight: 600 }}>Sell</div>
              <div className="card-body">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>

          </div>
          <div className="col-md-4 ">
            <div className="card box text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-header" style={{ fontWeight: 600 }}>Advice</div>
              <div className="card-body">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* latest  property */}
      <div className="container mt-3">
        <div className="row">
          <h1 className=" d-sm-flex justify-content-sm-center  justify-content-lg-start service">latest Property </h1>
          <div className="col-md-4 ">
            <div className="card box mb-3" style={{ maxWidth: "18rem" }}>
              <img className='p-2' src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg" alt="Avatar" style={{width:"100%"}} />
              <div class="container text-center p-2">
                <h4><b>John developer</b></h4>

                <p style={{fontWeight:600}}>hello <span style={{color:"#198754"}}>Price:22</span> </p>
               <button type='button' className='btn   text-white  btn-sm' style={{backgroundColor:"#198754" ,fontWeight: 600}}>Click here to view</button>
              </div>

            </div>

          </div><div className="col-md-4">
            <div className="card box mb-3" style={{ maxWidth: "18rem" }}>
              <img className='p-2' src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg" alt="Avatar" style={{width:"100%"}} />
              <div class="container text-center p-2">
                <h4><b>John developer</b></h4>

                <p style={{fontWeight:600}}>hello <span style={{color:"#198754"}}>Price:22</span> </p>
               <button type='button' className='btn   text-white  btn-sm' style={{backgroundColor:"#198754" ,fontWeight: 600}}>Click here to view</button>
              </div>

            </div>

          </div>
          <div className="col-md-4 ">
            <div className="card box mb-3" style={{ maxWidth: "18rem" }}>
              <img className='p-2' src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg" alt="Avatar" style={{width:"100%"}} />
              <div class="container text-center p-2">
                <h4><b>John developer</b></h4>

                <p style={{fontWeight:600}}>hello <span style={{color:"#198754"}}>Price:22</span> </p>
               <button type='button' className='btn   text-white  btn-sm' style={{backgroundColor:"#198754" ,fontWeight: 600}}>Click here to view</button>
              </div>

            </div>

          </div>
          
        </div>
      </div>

      
      {/*   property */}
      <div className="container mt-3">
        <div className="row">
          <h2 className=" d-sm-flex justify-content-sm-center  justify-content-lg-start service">New Project </h2>
          <div className="col-md-4 ">
            <div className="card box mb-3" style={{ maxWidth: "18rem" }}>
              <img className='p-2' src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg" alt="Avatar" style={{width:"100%"}} />
              <div class="container text-center p-2">
                <h4><b>John developer</b></h4>

                <p style={{fontWeight:600}}>hello <span style={{color:"#198754"}}>Price:22</span> </p>
               <button type='button' className='btn   text-white  btn-sm' style={{backgroundColor:"#198754" ,fontWeight: 600}}>Click here to view</button>
              </div>

            </div>

          </div><div className="col-md-4">
            <div className="card box mb-3" style={{ maxWidth: "18rem" }}>
              <img className='p-2' src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg" alt="Avatar" style={{width:"100%"}} />
              <div class="container text-center p-2">
                <h4><b>John developer</b></h4>

                <p style={{fontWeight:600}}>hello <span style={{color:"#198754"}}>Price:22</span> </p>
               <button type='button' className='btn   text-white  btn-sm' style={{backgroundColor:"#198754" ,fontWeight: 600}}>Click here to view</button>
              </div>

            </div>

          </div>
          <div className="col-md-4 ">
            <div className="card box mb-3" style={{ maxWidth: "18rem" }}>
              <img className='p-2' src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg" alt="Avatar" style={{width:"100%"}} />
              <div class="container text-center p-2">
                <h4><b>John developer</b></h4>

                <p style={{fontWeight:600}}>hello <span style={{color:"#198754"}}>Price:22</span> </p>
                <a href="/propertyDetail">
               <button type='button' className='btn   text-white  btn-sm' style={{backgroundColor:"#198754" ,fontWeight: 600}}>Click here to view</button>
             </a>
              </div>

            </div>

          </div>
          
        </div>
      </div>


    </>
  );
}

export default Home;
