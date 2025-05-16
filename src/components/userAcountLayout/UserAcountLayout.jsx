import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const UserAcountLayout = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Outlet />
    </div>
  )
}

export default UserAcountLayout
