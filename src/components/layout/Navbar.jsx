/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Navbar = () => {

    const { user, logout } = useAuth();

  return (
    <div>
      <div className='bg-base-200'>
            <div className="w-full items-center navbar max-w-7xl mx-auto lg:pl-7 lg:pr-10">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <div className="flex-1 mx-2 text-lg font-bold">Clean Co</div>
                <div className="flex-none hidden lg:block">
                    <div className='flex items-center gap-6'>
                        <NavLink 
                        to='/'
                        className={({ isActive }) =>
                        isActive ? 'font-semibold text-sm text-primary' : 'font-semibold text-sm'
                        }
                        >
                            Home
                        </NavLink>

                        <NavLink 
                        to='/about'
                        className={({ isActive }) =>
                        isActive ? 'font-semibold text-sm text-primary' : 'font-semibold text-sm'
                        }
                        >
                            About
                        </NavLink>

                        <NavLink 
                        to='/services'
                        className={({ isActive }) =>
                        isActive ? 'font-semibold text-sm text-primary' : 'font-semibold text-sm'
                        }
                        >
                            Services
                        </NavLink>

                        <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                        isActive ? 'font-semibold text-sm text-primary' : 'font-semibold text-sm'
                        }
                        >
                            Contact
                        </NavLink>
                        {user?.email ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="avatar">
                                <div className="w-9 rounded-full mt-1.5">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                                </label>
                                <ul
                                tabIndex={0}
                                className="menu-sm dropdown-content mt-3 z-[1] p-4 shadow text-center bg-base-100 rounded-box w-52"
                                >
                                <li>
                                    <NavLink
                                    to='/user/my-profile'
                                    className={({ isActive }) =>
                                    isActive ? 'font-semibold text-sm text-primary' : 'font-semibold text-sm'
                                    }                                    
                                    >
                                    My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to='/user/my-order'
                                    className={({ isActive }) =>
                                    isActive ? 'font-semibold text-sm text-primary' : 'font-semibold text-sm'
                                    }                                    
                                    >
                                    My Order
                                    </NavLink>
                                </li>
                                <li>
                                    <button onClick={logout} className="font-semibold text-sm hover:text-primary">Logout</button>
                                </li>
                                </ul>
                          </div>
                            ) : (
                            <NavLink
                            to='/login'
                            className={({ isActive }) =>
                            isActive ? 'font-semibold text-sm text-primary' : 'font-semibold text-sm'
                            }
                            >
                                Login
                            </NavLink>
                        )}
                        
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Navbar
