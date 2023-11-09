/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const Register = () => {

  const { createUser, handleUpdateProfile, logout } = useAuth();
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(email, password);
        await handleUpdateProfile(name, photo);
          logout(); 
          navigate('/login');
    } 
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="py-20 bg-base-200">
      <div className="shadow p-8 md:p-12 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-md bg-white">
          <h2 className="text-2xl font-bold text-center mb-3">
          Register
          </h2>
          <p className='text-center text-xs font-medium text-zinc-500 mb-5'>Start your journey: register and join today.</p>
          <form onSubmit={handleSubmit}>
          <div className="form-control">
              <label className="label">
              <span className="label-text font-semibold">Name</span>
              </label>
              <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered focus:outline-none rounded placeholder:text-xs text-sm"
              required
              onBlur={(e) => setName(e.target.value)}
              />
          </div>
          <div className="form-control">
              <label className="label">
              <span className="label-text font-semibold">Image</span>
              </label>
              <input
              type="text"
              name="photo"
              placeholder="Enter your name"
              className="input input-bordered focus:outline-none rounded placeholder:text-xs text-sm"
              required
              onBlur={(e) => setPhoto(e.target.value)}
              />
          </div>
          <div className="form-control">
              <label className="label">
              <span className="label-text font-semibold">Email</span>
              </label>
              <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered focus:outline-none rounded placeholder:text-xs text-sm"
              required
              onBlur={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className="form-control">
              <label className="label">
              <span className="label-text font-semibold">Password</span>
              </label>
              <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered focus:outline-none rounded placeholder:text-xs text-sm"
              required
              onBlur={(e) => setPassword(e.target.value)}
              />
          </div>
          <div className="form-control my-6">
              <button type='submit' className="btn btn-primary p-3 w-full rounded-md text-white font-bold text-sm">
              Register
              </button>
          </div>
          <p className="text-[#706F6F] text-center text-xs font-semibold">
              Already have an account?{" "}
              <Link to="/login">
              <span className="text-primary">Login</span>
              </Link>
          </p>
          </form>
      </div>
    </div>
  )
}

export default Register
