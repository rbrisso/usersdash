import React from 'react'
import { CgClose, CgMenu } from 'react-icons/cg'

const Navbar = (props) => {
  return (
    <nav className='md:ml-64 bg-[#2D93B8] dark:bg-[#333836] px-3 py-4 '>
        <div className='container max-w-full mx-auto flex items-center justify-between'>
            <div className='md:hidden left-2 top-2 '>
                <button 
                    className='text-white'
                    onClick={() => props.setShowSidebar('left-0')}
                >
                    <CgMenu />
                </button>
            </div>
            <div className='md:hidden left-2 top-2 flex'>
                <button 
                    className={`absolute top-6 md:hidden p-1
                    ${props.showSidebar === 'left-0' ? 'left-64' : '-left-64'}
                    z-50 transition-all duration-300 rounded text-[#ffffff] `}
                    onClick={() => props.setShowSidebar('-left-64')}
                >
                    <CgClose />
                </button>
            </div>
            <div className='hidden md:flex'>
                <h4 className=' dark:text-[#d5d9d7] text-white'>
                    Hi, welcome back!
                </h4>
            </div>
            <div className='hover:bg-gray-300 rounded text-white outline-none'>
                <button className='p-2'
                        onClick={props.handleThemeSwitch}>
                    {props.theme === 'dark' ? '🌙' : '🌞'}
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar