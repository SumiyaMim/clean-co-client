/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const { loading, user } = useAuth();
    const location = useLocation();

    if (loading) {
      return (
        <div className='flex justify-center py-20'>
            <span className="loading loading-ring loading-lg"></span>
        </div>
      )
    }
  
    if (!loading && !user?.email) {
      return <Navigate to="/login" state={location.pathname}></Navigate>;
    }
  
    return children;
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute
