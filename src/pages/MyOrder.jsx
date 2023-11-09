/* eslint-disable no-unused-vars */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import useAxios from '../hooks/useAxios'
import { auth } from '../config/firebase.config'
import toast from 'react-hot-toast'
import useAuth from '../hooks/useAuth'

const MyOrder = () => {

    const { loading } = useAuth();
    const axios = useAxios()
    const queryClient = useQueryClient()

    const {data: bookings} = useQuery({
        queryKey: ["booking"],
        queryFn: async () => {
            const email = auth.currentUser.email;
            return await axios.get(`/user/bookings?email=${email}`)
        }
    })

    // console.log(bookings)

    const {mutate} = useMutation({
        mutationKey: ["booking"],
        mutationFn: (id) => {
            return axios.delete(`/user/cancel-booking/${id}`)
        },
        onSuccess: () => {
            toast.success('Deleted Successfully')
            queryClient.invalidateQueries({ queryKey: ['booking'] })
        }
    })

    if (loading) {
        return (
          <div className='flex justify-center py-20'>
              <span className="loading loading-ring loading-lg"></span>
          </div>
        )
    }

  return (
    <div className='py-20'>
        <h2 className='mb-16 font-semibold text-3xl text-center'>My Order</h2>
      <div className='lg:mx-60'>
        {
            bookings?.data?.map((item) => (
                <div key={item?._id} className='mb-5'>
                    <div className='flex justify-between items-center shadow p-6'>
                        <div>
                            <h1 className='font-bold text-lg md:text-xl mb-2'>{item?.service}</h1>
                            <p className='font-semibold text-base md:text-lg'>{item?.price}$</p>
                        </div>
                        <button onClick={() => mutate(item?._id)} className='btn btn-primary'>Cancel</button>
                    </div>
                </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrder
