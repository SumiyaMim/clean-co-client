/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
  return (
    <div className="border-2 border-primary bg-primary h-[400px] flex flex-col rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl group">
      <div className="w-full flex-1 flex justify-center items-center">
        <h1 className="text-2xl font-bold text-white">{service?.name}</h1>
      </div>
      <div className="h-[200px] flex-[2] flex flex-col justify-between bg-white rounded-lg p-[15px] transition-all">
        <div className="h-[130px] text-lg text-justify flex items-center">
          <p>{service?.description}</p>
        </div>
        <p className="text-center font-semibold text-2xl mb-2">{service?.price}$</p>
        <Link
          to={`/booking/${service?._id}`}
          className="btn btn-primary w-full"
        >
          Book
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
