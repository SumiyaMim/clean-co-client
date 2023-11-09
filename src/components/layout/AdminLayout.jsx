/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-base-200 flex-[1] p-10">
        <h1>Dashboard</h1>
      </div>
      <div className="flex-[3] p-10">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
