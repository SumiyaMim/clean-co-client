/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from '../components/ui/Header'
import { useQuery } from '@tanstack/react-query'
import useAxios from '../hooks/useAxios';
import ServiceCard from '../components/ServiceCard';

const categories = [
  "Home Cleaning",
  "Carpet Cleaning",
  "Window Cleaning",
  "Office Cleaning",
  "Furniture Cleaning",
  "Exterior Cleaning",
  "Apartment Cleaning",
  "Specialized Cleaning",
  "Eco-Friendly Cleaning"
]

const Services = () => {

  const axios = useAxios();
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const limit = 6

  const getServices = async () => {
    return await axios.get(`/services?sortField=price&sortOrder=${price}&category=${category}&page=${page}&limit=${limit}`)
  }

  const { data: services, isLoading, isError, error } = useQuery({
    queryKey: ["service", price, category, page],
    queryFn: getServices,
  })

  const handlePrevious = () => {
    if(page > 1) {
      setPage(page - 1);
    }
  }
  const handleNext = () => {
    if(page < totalPage) {
      setPage(page + 1);
    }
  }

  const totalPage = Math.ceil(Number(services?.data?.total) / limit);

  if(isError){
    return <p>Something went wrong {error}</p>
  }

  return (
    <div>
      <Header title="Services">
        <p className='text-sm md:text-base'>
        Discover Our Cleaning Services. Comprehensive Solutions for Your Space, Tailored to Your Needs. From Routine Maintenance to Specialized Cleaning, We've Got It All.
        </p>
      </Header>
      <div>
        <div className='mt-12 mb-20 w-full mx-auto flex flex-col md:flex-row justify-end items-center border-2 border-primary rounded-xl py-5 px-10 gap-10'>
          <h1 className='flex-1 text-sm font-semibold'>Over 10 services to choose from</h1>
          <div className='flex gap-1 md:gap-5'>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <select 
                className="select select-bordered"
                onChange={(e) => setCategory(e.target.value)}
                value={category} 
              >
                <option value="" disabled>Choose one</option>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <select 
              className="select select-bordered"
              onChange={(e) => setPrice(e.target.value)}
              >
                <option disabled selected>Choose one</option>
                <option value='asc'>From low to high</option>
                <option value='desc'>From high to low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-20'>
        { isLoading ?   
          <div className='flex justify-center py-20'>
            <span className="loading loading-ring loading-lg"></span>
          </div>
          : 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {  
            services?.data?.result?.map((item) => (
              <ServiceCard key={item._id} service={item} />
            ))
          }
          </div>
        }
      </div>
      <div className='mb-20 flex justify-center'>
      { isLoading ?  
        <div className='flex justify-center py-20'>
          <span className="loading loading-ring loading-lg"></span>
        </div>
        :  
        <div className="join border-2 border-primary">
          <button onClick={handlePrevious} className="join-item btn btn-ghost">«</button>
          {
            [...Array(totalPage).fill(0)].map((item, index) => {
              const pageNumber = index + 1;
              return (
                <button key={pageNumber} onClick={() => setPage(pageNumber)} className={`${pageNumber === page ? "join-item btn btn-primary" : "join-item btn btn-ghost"}`}>{pageNumber}</button>
              )
          })}
          <button onClick={handleNext} className="join-item btn btn-ghost">»</button>
        </div>
        }
      </div>
    </div>
  )
}

export default Services
