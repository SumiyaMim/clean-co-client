import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-7xl px-7 lg:px-10 mx-auto ${className} `}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default Container;