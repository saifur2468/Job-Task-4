import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-base-100 border-b border-black sticky top-0 z-50">
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
               
                <div className="navbar-start">
                    <a className="btn btn-ghost text-lg sm:text-xl font-bold tracking-widest px-0 sm:px-2">
                        THETINY.SITE
                    </a>
                </div>

             
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1 text-base font-medium">
                        <li><a className="text-indigo-600 hover:text-indigo-600 hover:bg-indigo-50">Home</a></li>
                        <li><a className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50">About</a></li>
                        <li><a className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50">Blog</a></li>
                        <li><a className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50">Terms</a></li>
                    </ul>
                </div>

                <div className="navbar-end gap-2 sm:gap-3">
                    
             
                    <a className="btn btn-outline border-gray-300 hover:bg-gray-100 text-gray-700 font-medium rounded-lg text-xs sm:text-sm px-3 sm:px-4 hidden sm:inline-flex">
                        Log In
                    </a>
                    <a className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-medium border-none rounded-lg text-xs sm:text-sm px-3 sm:px-5 hidden sm:inline-flex">
                        Get Started Free
                    </a>

                 
                    <div className="dropdown dropdown-end lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost px-1">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        
                
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content bg-base-100 rounded-box z-50 mt-3 w-64 p-3 shadow-xl border border-base-200">
                            <li><a className="text-indigo-600 font-semibold">Home</a></li>
                            <li><a className="text-gray-600">About</a></li>
                            <li><a className="text-gray-600">Blog</a></li>
                            <li><a className="text-gray-600">Terms</a></li>
                            
                     
                            <div className="divider my-2 sm:hidden"></div>
                            <li className="sm:hidden mb-2">
                                <a className="btn btn-outline border-gray-300 font-medium justify-center">Log In</a>
                            </li>
                            <li className="sm:hidden">
                                <a className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-medium justify-center">Get Started Free</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;