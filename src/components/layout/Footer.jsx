/* eslint-disable no-unused-vars */
import React from 'react'
import { GrFacebook, GrTwitter, GrLinkedin } from 'react-icons/gr';

const Footer = () => {
  return (
   <div>
     <div>
       <div className="flex justify-between flex-col lg:flex-row gap-10 py-10">
        <div>
          <h1 className="text-xl font-bold mb-2">Clean Co</h1>
          <p className="lg:max-w-[35ch] font-medium text-justify">
          Connect with Clean Co - Bringing Cleanliness and Excellence to Your Space with Every Clean Sweep
          </p>
          <div className="flex gap-5 text-3xl text-primary mt-10">
            <GrFacebook className="cursor-pointer" />
            <GrLinkedin className="cursor-pointer" />
            <GrTwitter className="cursor-pointer" />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-lg font-semibold mb-2">Company</h1>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">About</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">Team</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Contact
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-lg font-semibold mb-2">Support</h1>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">FAQs</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Privacy Policy
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Terms & Conditions
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-lg font-semibold mb-2">Contact Information</h1>
          <p className="font-medium">Mohakhali, Dhaka 1212.</p>
          <p className="font-medium">+019 123 456 78</p>
          <p className="font-medium">info@cleanco.com</p>
        </div>
      </div>
      <div className="divider"></div>
      <p className="mt-6 mb-10">
        Copyright © 2023 Clean Co | Powered by Clean Co
      </p>
    </div>
   </div>
  )
}

export default Footer