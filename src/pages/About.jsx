/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/ui/Header'

const About = () => {
  return (
    <div>
      <Header title="Our Mission">
      <p className='text-sm md:text-base'>
      Clean Co is your trusted partner for all your cleaning needs. 
      Our team of dedicated professionals is committed to providing the br
      best cleaning services in town.
      </p>
      </Header>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-20'>
        <div className='border-2 border-primary rounded-xl'>
          <h3 className='bg-primary p-5 rounded-t-lg font-bold text-xl text-white'>Our Goal</h3>
          <p className='text-sm text-justify p-5 leading-6'>
          Our goal is to provide exceptional cleaning services that exceed your expectations and ensure your complete satisfaction with the highest quality results. Our dedicated team is committed to delivering top-notch cleaning services to make your space shine.
          </p>
        </div>
        <div className='border-2 border-primary rounded-xl'>
          <h3 className='bg-primary p-5 rounded-t-lg font-bold text-xl text-white'>Our Achievement</h3>
          <p className='text-sm text-justify p-5 leading-6'>
          Consistently delivering high-quality cleaning services to our clients. We take pride in maintaining a track record of excellence and client satisfaction through our consistent, top-tier service. Elevating cleaning standards for continuous client satisfaction.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
