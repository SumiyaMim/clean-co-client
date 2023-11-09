/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';

const Header = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center w-full my-24">
      <h1 className="text-4xl font-semibold mb-4">{title}</h1>
      <div className="max-w-[100ch] text-center">{children}</div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
