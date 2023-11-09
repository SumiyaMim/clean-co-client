/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <Navbar/>
            </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
            <div className="menu p-4 w-80 min-h-full bg-base-200">
                <Sidebar/>
            </div>
        </div>
    </div>
  )
}

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout
