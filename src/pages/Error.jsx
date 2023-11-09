/* eslint-disable no-unused-vars */
import React from 'react'
import error from '../assets/images/error.json'
import Lottie from "lottie-react"
import { TiArrowBack } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <div className='md:w-[700px] lg:w-[800px] mx-auto my-20 md:my-0'>
            <Lottie animationData={error} loop={true} />
        </div>
        <div className='my-10'>
            <Link to='/' className='font-semibold mx-auto flex justify-center gap-2'>
                <p><TiArrowBack className='text-3xl'></TiArrowBack></p>
                <p className='text-lg'>Back to home</p>
            </Link>
        </div>
    </div>
  )
}

export default Error
