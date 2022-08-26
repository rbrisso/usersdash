import React from 'react'

const Navbar = (props) => {
  return (
    <nav className='flex items-center flex-wrap bg-gray-500 dark:bg-gray-900 p-3 '>
        <div className='md:hidden fixed left-2 top-2 flex'>
            <button 
                className='inline-flex p-2 hover:bg-gray-300 rounded text-[#ffffff] ml-auto hover:text-white outline-none'
            >
            <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                />
            </svg>
            </button>
        </div>
        <span className='text-xl text-white font-bold uppercase tracking-wide m-auto md:m-px'>
            Users Dashboard
        </span>
        <div className='fixed right-2 top-2 flex'>
            <button className='inline-flex p-2 hover:bg-gray-300 rounded text-white ml-auto outline-none'
                    onClick={props.handleThemeSwitch}>
                {props.theme === 'dark' ? '🌙' : '🌞'}
            </button>
        </div>
    </nav>
  )
}

export default Navbar