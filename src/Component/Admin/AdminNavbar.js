import React from 'react'
import { FiAlignJustify } from "react-icons/fi";

const AdminNavbar = ({ toggleSidebar }) => {
    return (
        <div className=''>
            <div className="Admin_nav bg-slate-700 d-flex p-2 ">
            <div className="d-flex justify-start  text-white font-bold px-4 py-3 grid grid-cols-2 w-1/2" onClick={toggleSidebar}>
         <button><FiAlignJustify className=''/></button>
            </div>
            <div className="  d-flex justify-end text-white font-bold px-4 grid grid-cols-2 w-1/2">
                 <button>hello</button>
                
          </div>
                
            </div>
        </div>
    )
}

export default AdminNavbar