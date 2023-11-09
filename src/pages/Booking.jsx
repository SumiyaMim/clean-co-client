/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Booking = () => {

    const [customerName, setCustomerName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [address, setAddress] = useState('');
    const axios = useAxios()

    const {id} = useParams();

    const {data: service} = useQuery({
        queryKey: ["booking"],
        queryFn: async () => {
            return await axios.get(`/services/${id}`)
        }
    })

    const {mutate} = useMutation({
        mutationKey: ["booking"],
        mutationFn: (bookingData) => {
            return axios.post('/user/create-booking', bookingData)
        },
        onSuccess: () => {
            toast.success('Booked Successfully')
        }
    })

  return (
    <div className='py-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center'>
        <div className='flex flex-col justify-between h-full'>
            <div>
                <h2 className='text-lg font-bold mb-3'>Service Name: {service?.data?.name}</h2>
                <p className='font-semibold mb-5'>Service Description: <br /> <span className='font-normal text-sm'>{service?.data?.description}</span></p>
                <p className='font-semibold'>Features: <br />
                <ul className="list-disc list-inside">
                {service?.data?.features?.map((item, index) => (
                    <li key={index} className="font-normal text-sm my-2">
                    {item}
                    </li>
                ))}
                </ul>
                </p>
            </div>
            <div>
                <div className="divider"></div>
                <h3 className='font-bold text-3xl'>{service?.data?.price}$ <span className='text-xs'>vat included</span></h3>
            </div>
        </div>
        <div className='p-8 rounded-xl shadow-lg'> 
             <form>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                    type="text"
                    name="customerName"
                    placeholder="Enter your name"
                    className="input input-bordered focus:outline-none rounded placeholder:text-xs text-sm"
                    required
                    onBlur={(e) => setCustomerName(e.target.value)}
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
                    <span className="label-text font-semibold">Date</span>
                    </label>
                    <input
                    type="date"
                    name="date"
                    className="input input-bordered focus:outline-none rounded placeholder:text-xs text-sm"
                    required
                    onBlur={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text font-semibold">Time Slot</span>
                    </label>
                    <select 
                    name="timeSlot"
                    className="select select-bordered focus:outline-none"
                    onBlur={(e) => setTimeSlot(e.target.value)}
                    >
                        <option value='' disabled>Select</option>
                        <option value='8am - 12pm'>8am - 12pm</option>
                        <option value='12pm - 4pm'>12pm - 4pm</option>
                        <option value='4pm - 8pm'>4pm - 8pm</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text font-semibold">Address</span>
                    </label>
                    <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    className="input input-bordered focus:outline-none rounded placeholder:text-xs text-sm"
                    required
                    onBlur={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="form-control my-6">
                    <button onClick={() => mutate({customerName, email, date, timeSlot, address, service : service?.data?.name, price: service?.data?.price,  status: 'pending'})} type='button' className="btn btn-primary p-3 w-full rounded-md text-white font-bold text-sm">
                    Book
                    </button>
                </div>
            </form> 
        </div>
    </div>
  )
}

export default Booking
