/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/ui/Header'
import { FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const Contact = () => {
  return (
    <div className='max-w-[100ch] mx-auto'>
      <Header title="Contact">
        <p className='text-sm md:text-base'>Feel free to reach out to Clean Co for assistance. We're just a message or call away, ready to help you with all your cleaning needs. Our team ensures your pristine, hassle-free space.</p>
      </Header>
      <div className='flex flex-col md:flex-row justify-between mb-20 gap-5'>
        <div className='bg-base-200 p-10 rounded-xl w-full md:w-64'>
           <i><FaMapLocationDot className='mx-auto text-primary text-5xl mb-5'></FaMapLocationDot></i>
           <p className="font-medium text-center">Mohakhali, Dhaka 1212.</p>
        </div>
        <div className='bg-base-200 p-10 rounded-xl w-full md:w-64'>
           <i><FaPhoneVolume className='mx-auto text-primary text-5xl mb-5'></FaPhoneVolume></i>
           <p className="font-medium text-center">+019 123 456 78</p>
        </div>
        <div className='bg-base-200 p-10 rounded-xl w-full md:w-64'>
           <i><IoMdMail className='mx-auto text-primary text-5xl mb-5'></IoMdMail></i>
           <p className="font-medium text-center">info@cleanco.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
