/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Sidebar = () => {

  const { user, logout } = useAuth();

  return (
    <div>
      <div className='flex gap-3 flex-col p-5'>
          {user?.email ? (
              <div className='flex flex-col gap-2 mx-auto'>
                 <label tabIndex={0} className="avatar">
                  <div className="w-9 rounded-full mt-1.5 mx-auto">
                      <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>
                <NavLink 
                to='/user/my-profile' 
                className={({ isActive }) =>
                isActive ? 'font-semibold text-sm text-primary text-center' : 'font-semibold text-sm text-center'
                }                
                >
                   My Profile
                </NavLink>
                <NavLink 
                to='/user/my-order' 
                className={({ isActive }) =>
                isActive ? 'font-semibold text-sm text-primary text-center' : 'font-semibold text-sm text-center'
                }                
                >
                   My Order
                </NavLink>
              </div>
            ) : (
              ""
            )}

            {user?.email ? (
              <div className='flex gap-3 flex-col'>
                <NavLink 
                to='/'
                className={({ isActive }) =>
                isActive ? 'font-semibold text-sm text-primary text-center' : 'font-semibold text-sm text-center'
                }
                >
                    Home
                </NavLink>

                <NavLink 
                to='/about'
                className={({ isActive }) =>
                isActive ? 'font-semibold text-sm text-primary text-center' : 'font-semibold text-sm text-center'
                }
                >
                    About
                </NavLink>

                <NavLink 
                to='/services'
                className={({ isActive }) =>
                isActive ? 'font-semibold text-sm text-primary text-center' : 'font-semibold text-sm text-center'
                }
                >
                    Services
                </NavLink>

                <NavLink 
                to='/contact'
                className={({ isActive }) =>
                isActive ? 'font-semibold text-sm text-primary text-center' : 'font-semibold text-sm text-center'
                }
                >
                    Contact
                </NavLink>
              </div>
            ) : (
              <div className='flex gap-3 flex-col'>
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
              </div>
            )}

            {user?.email ? (
                <button onClick={logout} className='font-semibold text-sm hover:text-primary'>Logout</button>
                ) : (
                <NavLink
                to='login'
                className={({ isActive }) =>
                isActive ? 'font-semibold text-sm text-primary' : 'font-semibold text-sm'
                }
                >
                    Login
                </NavLink>
            )}
       </div>
    </div>
  )
}

export default Sidebar
