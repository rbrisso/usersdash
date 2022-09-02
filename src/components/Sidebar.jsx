import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import {FaRegUser} from 'react-icons/fa'
import {BsFlag} from 'react-icons/bs'
import {FaFemale} from 'react-icons/fa'
import {TbLayoutDashboard} from 'react-icons/tb'

const Sidebar = (props) => {
    const [showSidebar, setShowSidebar] = useState('-left-64')

    return (
        <>
            <Navbar 
                theme={props.theme} 
                handleThemeSwitch={props.handleThemeSwitch}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden w-64 z-10 bg-[#23728F] dark:bg-[#333836] py-4 px-8 transition-all duration-300`}>
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <img
                        className="mt-2 text-center w-full inline-block h-12"
                        src={"./userdash.png"}
                    />
                    <div className="flex flex-col">
                        <hr className='my-4 min-w-full' />
                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-2">
                                <Link to='/dashboard'
                                    className="flex items-center gap-4 text-sm dark:text-[#d5d9d7] text-white font-light px-4 py-3 rounded-lg"
                                >
                                    <TbLayoutDashboard />
                                    Dashboard
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <Link to='nationality'
                                    className="flex items-center gap-4 text-sm dark:text-[#d5d9d7] text-white font-light px-4 py-3 rounded-lg"
                                >
                                    <BsFlag />
                                    Nationality
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2">
                                <Link to='/women'
                                    className="flex items-center gap-4 text-sm dark:text-[#d5d9d7] text-white font-light px-4 py-3 rounded-lg"
                                >
                                    <FaFemale />
                                    Women
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <Link to='/men'
                                    className="flex items-center gap-4 text-sm dark:text-[#d5d9d7] text-white font-light px-4 py-3 rounded-lg"
                                >
                                    <FaRegUser />
                                    Men
                                </Link>
                            </li>
                        </ul>

                        <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg dark:text-[#d5d9d7] text-white mb-2">
                                <Link to='#'
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    Creditos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Sidebar