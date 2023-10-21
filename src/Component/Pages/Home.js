import React from 'react'
import '../Layout.css'
function Home() {
  return (
    <div>
      <div className=" bg_image">
     <div className='container'>
      <div className='row'>
        <div className='col-lg-8 col-md-6 col-sm-12 py-md-5 mt-md-5'>
        <div class="intro-body ">
                      <p class="intro-title-top" style={{color:'whitesmoke'}}>23,Mehul Nagar,Indore
                        <br/> 272002
                      </p>
                      <h1 class="intro-title mb-4 " style={{color:'whitesmoke'}}>
                        <span class="color-b">4BHK </span > house
                        <br/> Villa
                      </h1>
                      <p class="intro-subtitle intro-price ">
                        <button className='btn btn-outline-primary btn-lg'> <a href=""><span class="price-a "style={{color:'whitesmoke'}}>Buy | ₹ 123456</span></a></button>
                       
                      </p>
                    </div>
        </div>
      </div>
     </div>
      </div>

    </div>
  )
}

export default Home