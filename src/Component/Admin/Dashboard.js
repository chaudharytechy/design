import React, { useState } from 'react'
import Sidebar from './Sidebar'
import AdminNavbar from './AdminNavbar'

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>

      <AdminNavbar toggleSidebar={toggleSidebar} />
      {/* <Sidebar  />
    
    */}
      {sidebarVisible && <Sidebar toggleSidebar={toggleSidebar}  />}
      <div className="d-flex mt-2  ">
      <div className="grid grid-cols-2 w-1/6">sdhas</div>
        <div className="grid w-5/6 mr-10 ">
          <div className="d flex ">
            {/* <div className="grid grid-cols-10 w-5/6 justify-end"> */}
            <marquee behavior="" direction="left"><span className='font-bold'>100Acress</span>AdminPanel</marquee>
            {/* </div> */}
            <div className="d-flex justify-end  mb-2 grid grid-cols-2 w-1/6">
              <a href="#" class=" inline-flex cursor-pointer items-center rounded-full  bg-blue-700 border-1 h-10  shadow-md transition border-white  text-white py-2 font-b px-3 font-sans text-lg ">Add New</a> 
              </div>
          </div>
           
          <hr className="rounded " />
        </div>
      </div>
      <div className='d-flex '>

        <div className="grid grid-cols-2 w-1/6">sdhas</div>
        <div className="grid grid-cols-2 w-5/6">fhshfih</div>
      </div>

    </>
  )
}

export default Dashboard