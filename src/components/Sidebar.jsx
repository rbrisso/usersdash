import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

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
        <div className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden w-64 z-10 bg-gray-300 py-4 px-8 transition-all duration-300`}>
            <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                        <div className="flex flex-col">
                            <ul className="flex-col min-w-full flex list-none">
                                <li className="rounded-lg mb-2">
                                    <Link to='/dashboard'
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="rounded-lg mb-2">
                                    <Link to='/age'
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    >
                                        Age
                                    </Link>
                                </li>
                                <li className="rounded-lg mb-2 ">
                                    <Link to='/maps'
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    >
                                        Maps
                                    </Link>
                                </li>
                                <li className="rounded-lg mb-2 text-gray-700">
                                    <Link to='nationality'
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    >
                                        Nationality
                                    </Link>
                                </li>
                            </ul>

                            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                                <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-gray-800 mb-2">
                                    <Link to='/credits'
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