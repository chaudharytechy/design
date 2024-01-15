import React from 'react'
import { FiAlignJustify } from "react-icons/fi";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div>
      <div className="sidebar w-40 ">
        <div className="p-4   bg-red-700 text-white h-100">
          <div className="d-flex justify-end" onClick={toggleSidebar}>
            <FiAlignJustify />
          </div>

          <div className="p-1">
            <ul className='text-center'>
              <li className='p-3 font-bold'><a href="/Admin_project">Dashboard</a></li>
              <li className='p-3 font-bold'><a href="/Admin_project">Project</a></li>
              <li className='p-3 font-bold'><a href="/Admin_project">Buy</a></li>
              <li className='p-3 font-bold'><a href="/Admin_project">Rent</a></li>
              <li className='p-3 font-bold'><a href="/Admin_project">Blog</a></li>
              <li className='p-0 font-bold'><a href="/Admin_project">Post Property</a></li>


            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sidebar