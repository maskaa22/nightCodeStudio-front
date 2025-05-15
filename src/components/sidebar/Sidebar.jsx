import React from 'react'
import Navigation from '../navigation/Navigation'
import Ballance from '../ballance/Ballance'
import Currency from '../currency/Currency'

const Sidebar = () => {
  return (
    <div>
      <Navigation/>
      <Ballance/>
      <Currency/>
    </div>
  )
}

export default Sidebar
