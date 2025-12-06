import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null); 

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Products', href: '#products' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    const handleNavigation = (e, href) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        setIsMenuOpen(false); 
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                if (isMenuOpen) {
                    setIsMenuOpen(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]); 

    return (
        <nav 
            id='topnav' 
            ref={navRef} 
            className='fixed z-50 w-full 
            bg-linear-to-b from-slate-300 via-slate-100 to-slate-300 via-70% 
            text-orange-900 font-semibold'
        >

            {/* Main Navigation Container */}
            <div className="flex justify-between items-center px-5 py-3 w-full max-w-[900px] mx-auto">
                
                {/* Logo and Company Name */}
                <a href='#' 
                    onClick={(e) => handleNavigation(e, '#')}
                    className="flex items-center space-x-2 group shrink-0">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-6 text-orange-900" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M9.218 2h2.402L16 12.987h-2.402zM4.379 2h2.512l4.38 10.987H8.82l-.895-2.308h-4.58l-.896 2.307H0L4.38 2.001zm2.755 6.64L5.635 4.777 4.137 8.64z"/>
                        </svg>
                    </div>
                    <span>AR Sales</span>
                </a>

                {/* Desktop Menu Links */}
                <div className='hidden md:flex space-x-7 items-center'>
                    {navItems.map((item) => (
                        <a key={item.name} 
                           href={item.href} 
                           onClick={(e) => handleNavigation(e, item.href)}
                           className='hover:text-orange-600 duration-300'>
                            {item.name}
                        </a>
                    ))}
                    <button className="cursor-pointer hover:text-orange-600 duration-300">Login</button>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden flex items-center'>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

            </div>
            
            {/* Mobile Menu Links Panel */}
            <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0 overflow-hidden'}
                bg-slate-100 border-t border-orange-800/50`}
            >
                <div className='flex flex-col space-y-2 px-5 pb-2'>
                    {navItems.map((item) => (
                        <a key={item.name} 
                           href={item.href} 
                           onClick={(e) => handleNavigation(e, item.href)}
                           className='py-2 px-3 rounded-md hover:bg-orange-500/30 active:bg-orange-500/50 duration-200'>
                            {item.name}
                        </a>
                    ))}
                    <button className="py-2 px-3 mt-2 text-left rounded-md border border-orange-800 hover:bg-orange-500/30 active:bg-orange-500/50 duration-200">
                        Login
                    </button>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;