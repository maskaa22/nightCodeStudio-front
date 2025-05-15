import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

const UserAcountLayout = ({ children }) => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      { children }
    </div>
  )
}

export default UserAcountLayout
