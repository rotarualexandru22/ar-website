import React from 'react'

const Navbar = () => {
  return (
    <nav id='topnav' className='flex justify-center bg-linear-to-b
    from-slate-300 via-slate-100 to-slate-300 via-70% text-orange-900
    font-semibold fixed z-50 w-full'>

        {/* Top menu */}
        <div className="flex justify-between items-center space-x-7 px-5 py-3 w-full max-w-[900px] mx-auto">
            {/* Logo and Company Name */}
            <a href='#' 
                onClick={(e) => {
                    e.preventDefault(); 
                    window.scrollTo({
                    top: 0,
                    behavior: 'smooth', 
                    });
                }}
            className="flex items-center group">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-6 text-orange-900" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M9.218 2h2.402L16 12.987h-2.402zM4.379 2h2.512l4.38 10.987H8.82l-.895-2.308h-4.58l-.896 2.307H0L4.38 2.001zm2.755 6.64L5.635 4.777 4.137 8.64z"/>
                    </svg>
                </div>

                <span>AR Sales</span>
            </a>

            {/* Main menu */}
            <div className='flex space-x-7 '>
                <a href="#home" className='hover:text-orange-600 duration-300'>Home</a>
                <a href="#services" className='hover:text-orange-600 duration-300'>Services</a>
                <a href="#products" className='hover:text-orange-600 duration-300'>Products</a>
                <a href="#testimonials" className='hover:text-orange-600 duration-300'>Testimonials</a>
            </div>

            {/* Login */}
            <button className="cursor-pointer hover:text-orange-600 duration-300">Login</button>
        </div>

    </nav>
  )
}

export default Navbar

