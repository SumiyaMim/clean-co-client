/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import IntroImage from '../assets/images/intro.jpg';

const Home = () => {
  return (
      <div className="flex flex-col lg:flex-row py-20 gap-16">
        <div className="lg:flex-1 flex flex-col justify-between lg:py-14">
          <h1 className="text-4xl md:text-6xl font-bold text-start">
            <span>Quality Cleaning</span> <br />{' '}
            <span className="text-primary">for Your Home</span>
          </h1>
          <p className="my-5 text-justify">
          With years of experience and a passion 
          for cleanliness, we take pride in transforming your space into a spotless haven.
          </p>
          <div className="space-x-5">
            <Link to="/services" className="btn btn-md btn-primary text-white">
              Book a cleaning
            </Link>
            <Link to="/about" className="btn btn-md">
              Read More
            </Link>
          </div>
          <div className="divider"></div>
          <div className="flex items-center gap-5">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-14">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-14">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-14">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-xs md:text-base">Rated 5 out of 5 by our clients</p>
            </div>
          </div>
        </div>
        <div className="lg:h-[500px] w-full bg-green-500 lg:flex-1 rounded-2xl overflow-hidden ">
          <img
            src={IntroImage}
            alt="landing"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
  );
};

export default Home;