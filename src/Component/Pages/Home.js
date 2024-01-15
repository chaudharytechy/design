// 
import React from 'react';
import '../Layout.css';
import Header from '../header'
import Footer from '../footer'

function Home() {
  return (
    <>
    <Header/>
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
              style={{ filter: "brightness(0.3)", height: "550px" }} />

          </div>
         <div className='float-start ms-5'>
         <div class="text-block">
            <h4>Nature</h4>
            <p>What a beautiful sunrise</p>
            <button type='button' className='' style={{ backgroundColor: "#198754", fontWeight: 600 ,color:"white"}}>Click here to view</button>

          </div>

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
        <div className='container mt-5 '>
          <div className='row box '>
            <div className='col-md-1'></div>
            <div className='col-md-10 py-4 border-radius'>
              <div className='row'>
                <div className='col-md-8'>
                  <form className=''>
                    <input className='serach-box ' type='text' placeholder='serch for city , locality andlandmark' />
                  </form>
                </div>
                <div className='col-md-4 d-flex justify-center ms-auto py-3 px-5'>
                  <button class='max-w-md  bg-green-800 hover:bg-blue-700 text-white font-bold py-1 px-5 rounded'>Search</button>
                </div>
              </div>

            </div>
            <div className='col-md-1'></div>
          </div>

        </div>
      </div>

      {/* service section */}
      <div className="container mt-5">
        <div className="row">
          <h1 className=" d-sm-flex justify-content-sm-center  justify-content-lg-start service">Our Services </h1>
          <div className="col-md-4 d-flex justify-center  mt-1">
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
          <div className="col-md-4  d-flex justify-center">
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
          <div className="col-md-4  d-flex justify-center">
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
          <div className="col-md-4 d-flex justify-center ">
            <div className="card box mb-3" style={{ maxWidth: "18rem" }}>
              <img className='p-2' src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg" alt="Avatar" style={{ width: "100%" }} />
              <div class="container text-center p-2">
                <h4><b>John developer</b></h4>

                <p style={{ fontWeight: 600 }}>hello <span style={{ color: "#198754" }}>Price:22</span> </p>
                <button type='button' className='p-1 px-2 rounded-full' style={{ backgroundColor: "#198754", fontWeight: 600 }}>Click here to view</button>
              </div>

            </div>

          </div><div className="col-md-4 d-flex justify-center">
            <div className="card box mb-3" style={{ maxWidth: "18rem" }}>
              <img className='p-2' src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg" alt="Avatar" style={{ width: "100%" }} />
              <div class="container text-center p-2">
                <h4><b>John developer</b></h4>

                <p style={{ fontWeight: 600 }}>hello <span style={{ color: "#198754" }}>Price:22</span> </p>
                <button type='button' className='p-1 px-2 rounded-full' style={{ backgroundColor: "#198754", fontWeight: 600 }}>Click here to view</button>
              </div>

            </div>

          </div>
          <div className="col-md-4 d-flex justify-center ">
            <div className="card box mb-3" style={{ maxWidth: "18rem" }}>
              <img className='p-2' src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg" alt="Avatar" style={{ width: "100%" }} />
              <div class="container text-center p-2">
                <h4><b>John developer</b></h4>

                <p style={{ fontWeight: 600 }}>hello <span style={{ color: "#198754" }}>Price:22</span> </p>
                <button type='button' className='p-1 px-2 rounded-full' style={{ backgroundColor: "#198754", fontWeight: 600 }}>Click here to view</button>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/*   property */}
      <div className="container mt-3">
        <div className="row">
          <h1 className=" d-sm-flex justify-content-sm-center  justify-content-lg-start service">latest Property </h1>
          <div className="col-md-4 d-flex justify-center ">
            <div className="card box mb-3" style={{ maxWidth: "18rem" }}>
              <img className='p-2' src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg" alt="Avatar" style={{ width: "100%" }} />
              <div class="container text-center p-2">
                <h4><b>John developer</b></h4>

                <p style={{ fontWeight: 600 }}>hello <span style={{ color: "#198754" }}>Price:22</span> </p>
                <button type='button' className='p-1 px-2 rounded-full' style={{ backgroundColor: "#198754", fontWeight: 600 }}>Click here to view</button>
              </div>

            </div>

          </div><div className="col-md-4 d-flex justify-center">
            <div className="card box mb-3" style={{ maxWidth: "18rem" }}>
              <img className='p-2' src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg" alt="Avatar" style={{ width: "100%" }} />
              <div class="container text-center p-2">
                <h4><b>John developer</b></h4>

                <p style={{ fontWeight: 600 }}>hello <span style={{ color: "#198754" }}>Price:22</span> </p>
                <button type='button' className='p-1 px-2 rounded-full' style={{ backgroundColor: "#198754", fontWeight: 600 }}>Click here to view</button>
              </div>

            </div>

          </div>
          <div className="col-md-4 d-flex justify-center ">
            <div className="card box mb-3" style={{ maxWidth: "18rem" }}>
              <img className='p-2' src="https://res.cloudinary.com/dpnselvgk/image/upload/v1682129720/estate-agency/l1zbkrahgrci00epdfc7.jpg" alt="Avatar" style={{ width: "100%" }} />
              <div class="container text-center p-2">
                <h4><b>John developer</b></h4>

                <p style={{ fontWeight: 600 }}>hello <span style={{ color: "#198754" }}>Price:22</span> </p>
                <button type='button' className='p-1 px-2 rounded-full' style={{ backgroundColor: "#198754", fontWeight: 600 }}>Click here to view</button>
              </div>

            </div>

          </div>

        </div>
      </div>

      <div>
        <a href="https://api.whatsapp.com/send?phone=chihh" class="dd-m-whatsapp">
          <span class="icon"></span>
        </a>
      </div>
     <Footer />
    </>
  );
}

export default Home;
