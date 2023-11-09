/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxios from '../hooks/useAxios';

const Login = () => {

  const { login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const axios = useAxios();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading('Logging in ...');

    try {
      const user = await login(email, password);
      const res = await axios.post("/auth/access-token", { email: user.user.email })
      // console.log(res)

      if(res.data.success){
        toast.success('Logged in successfully', { id: toastId });
        navigate(location?.state ? location.state : '/');
      }
      else{
        logout();
      }
    } 
    catch (error) {
      // toast.error(error.message, { id: toastId });
      toast.error('Invalid email or password', { id: toastId });
      setError('Invalid email or password')
    }
  }

  return (
    <div className="py-20 bg-base-200">
      <div className="shadow p-8 md:p-12 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-md bg-white">
          <h2 className="text-2xl font-bold text-center mb-3">
          Login
          </h2>
          <p className='text-center text-xs font-medium text-zinc-500 mb-5'>Welcome back! Please login to your account.</p>
          <form onSubmit={handleSubmit}>
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
          <p className='mt-2 text-xs text-red-600 font-semibold'>{error}</p>
          <div className="form-control my-6">
              <button type='submit' className="btn btn-primary p-3 w-full rounded-md text-white font-bold text-sm">
              Login
              </button>
          </div>
          <p className="text-[#706F6F] text-center text-xs font-semibold">
              Don’t have an account?{" "}
              <Link to="/register">
              <span className="text-primary">Register</span>
              </Link>
          </p>
          </form>
      </div>
    </div>
  )
}

export default Login
