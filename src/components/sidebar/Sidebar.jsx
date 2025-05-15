import React from 'react'
import Navigation from '../navigation/Navigation'
import Balance from '../balance/Balance'
import Currency from '../currency/Currency'

const Sidebar = () => {
  return (
    <div>
      <Navigation/>
      <Balance/>
      <Currency/>
    </div>
  )
}

export default Sidebar
