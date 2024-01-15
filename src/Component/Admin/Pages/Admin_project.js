import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import AdminNavbar from '../AdminNavbar'
import axios from 'axios';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding:'10px',
        width:'500px',
        marginTop:"0px",
        height:"100%"
        
        
}}
const Admin_project = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(10);



    const paginate = pageNumber => setCurrentPage(pageNumber);

    const [project, setProject] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "https://acre.onrender.com/preLaunch/viewAll"
                );
                setProject(res.data.data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = project.slice(
        indexOfFirstProject,
        indexOfLastProject
    );


    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    return (
        <>
            <AdminNavbar toggleSidebar={toggleSidebar} />
            {/* <Sidebar  />
    
    */}
            {sidebarVisible && <Sidebar toggleSidebar={toggleSidebar} />}
            <div className="d-flex mt-2  ">
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 lg:w-1/6 sm:grid-cols-3 sm:w-2/6 xl:w-1/6">sdhas</div>
                <div className="grid   w-5/6 mr-10 ">
                    <div className="d flex ">
                        {/* <div className=""> */}
                        <marquee behavior="" direction="left"><span className='font-bold'>100Acress</span>AdminPanel</marquee>
                        {/* </div> */}
                        <div className="d-flex justify-end  mb-2 p-2 md:p-0 grid md:grid-cols-3 md:w-2/6">
                            <a href="#" class=" inline-flex cursor-pointer items-center  rounded-full  bg-blue-700 border-1 h-10  shadow-md transition border-white  text-white py-2 py-sm-0 font-b px-4 md:px-0 font-sans ">Add New</a>
                        </div>
                    </div>

                    <hr className="rounded " />
                </div>
            </div>
            <div className='d-flex '>


                <div className="grid xl:grid-cols-2 lg:grid-cols-2 lg:w-1/6 sm:grid-cols-3 sm:w-2/6 xl:w-1/6">sdhas</div>

                <div className="grid grid-cols-2 w-5/6 py-1 ">
                    <div className="d-flex ">
                        <div className="">



                            <table className='text-center'  >
                                <tr>
                                    <th className='table_heading_serial '>S.no</th>
                                    <th className='table_heading'>Firstname</th>
                                    <th className='table_heading'>Firstname</th>
                                    <th className='table_heading'>Lastname</th>
                                    <th className='table_heading_action'>Action</th>
                                </tr>
                                {
                                    currentProjects.map((data, index) => {
                                        return (
                                            <tr>

                                                <td>
                                                    {(index + 1) + (currentPage - 1) * 10}

                                                </td>
                                                <td>{data.projectName}</td>
                                                <td>{data.area}</td>
                                                <td>{data.city}</td>
                                                <td>
                                                    <div className="d-flex p-1">
                                                        <div className="grid grid-cols-4 w-1/3 d-flex justify-center">
                                                            <div className=' '>
                                                                {/* <a href=""> */}
                                                                <button onClick={openModal} class=" outline-none rounded-lg text-white bg-gradient-to-r from-emerald-300 to-blue-500  px-2 py-1 active:scale-95 ">View</button>
                                                                {/* </a> */}
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-4 w-1/3 d-flex justify-center">
                                                            <div>
                                                                {/* <a href=""> */}
                                                                <button class="outline-none rounded-lg text-white bg-gray-500 px-2 py-1  active:scale-95 ">Edit</button>
                                                                {/* </a> */}
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-4 w-1/3 d-flex justify-center">
                                                            <div>
                                                                <a href="">
                                                                    <button class=" outline-none rounded-lg text-white bg-red-600 px-2 py-1  active:scale-95 ">delete</button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }


                            </table>
                            {/* Pagination */}
                            <ul className="pagination d-flex justify-end">
                                {Array.from(
                                    { length: Math.ceil(project.length / projectsPerPage) },
                                    (_, index) => (
                                        <li key={index} className="page-item">
                                            <button
                                                onClick={() => paginate(index + 1)}
                                                className="page-link  focus:not-sr-only active:text-black text-white bg-red-700"
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* modal */}
           
                
                <Modal
                    isOpen={modalIsOpen}
                
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div class="relative w-2xl rounded-md border text-gray-800 shadow-lg"     >
                        <p class="mt-4 pl-4 text-xl font-bold">Add new user</p>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={closeModal} class="absolute right-0 top-0 m-3 h-6 w-6 cursor-pointer text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />

                        </svg>
                        <div class="flex flex-col items-center px-8 py-10">
                            <label class="block w-full" for="name">
                                <p class="mb-1 text-sm text-gray-600">Name</p>
                                <input class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter name" />
                            </label>
                            <label class="block w-full" for="name">
                                <p class="mb-1 text-sm text-gray-600">Name</p>
                                <input class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter name" />
                            </label>
                          
                            <label class="block w-full" for="name">
                                <p class="mb-1 text-sm text-gray-600">Name</p>
                                <input class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter name" />
                            </label>
                          
                            <label class="block w-1/2" for="name">
                                <p class="mb-1 text-sm text-gray-600">Name</p>
                                <input class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter name" />
                            </label>
                          
                            <label class="block w-full" for="name">
                                <p class="mb-1 text-sm text-gray-600">Name</p>
                                <input class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter name" />
                            </label>
                          
                            <label class="block w-full" for="name">
                                <p class="mb-1 text-sm text-gray-600">Name</p>
                                <input class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter name" />
                            </label>
                          
                            <label class="block w-full" for="name">
                                <p class="mb-1 text-sm text-gray-600">Name</p>
                                <input class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter name" />
                            </label>
                          
                            <label class="block w-full" for="name">
                                <p class="mb-1 text-sm text-gray-600">Name</p>
                                <input class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter name" />
                            </label>
                          
                            <label class="block w-full" for="name">
                                <p class="mb-1 text-sm text-gray-600">Name</p>
                                <input class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter name" />
                            </label>
                          
                            <label class="block w-full" for="name">
                                <p class="mb-1 text-sm text-gray-600">Name</p>
                                <input class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter name" />
                            </label>
                          
                          
                            <label class="block w-full" for="name">
                                <p class="mb-1 text-sm text-gray-600">Name</p>
                                <input class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter name" />
                            </label>
                            <label class="mt-4 block w-full" for="name">
                                <p class="mb-1 text-sm text-gray-600">Email Address</p>
                                <input class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="email" placeholder="Enter email" />
                            </label>
                            <label class="mt-4 block w-full" for="name">
                                <p class="mb-1 text-sm text-gray-600">Assign Team</p>
                                <select class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="email">
                                    <option value="Marketing">Marketing</option>
                                    <option value="Designing">Designing</option>
                                </select>
                            </label>

                            <div class="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                                <button class="whitespace-nowrap rounded-md bg-blue-500 px-5 py-2 font-medium text-white">Add User</button>
                          
                        </div>
                        
                        </div>
                    </div>

                </Modal>
       
        </>


    )
}

export default Admin_project