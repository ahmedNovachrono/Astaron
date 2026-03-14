import React from 'react'
import { Outlet } from 'react-router-dom'

export const UserDashboard = () => {
  return (
  <>
    <h1>UserDashboard</h1>
    <Outlet />
  </>
  )
}
