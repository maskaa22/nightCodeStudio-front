import React from 'react'
import TransactionsList from '../transactionsList/TransactionsList'
import ButtonAddTransaction from '../buttonAddTransaction/ButtonAddTransaction'
import ModalAddTransaction from '../modalAddTransaction/ModalAddTransaction'

const HomeTab = () => {
  return (
    <div>
      <TransactionsList/>
      <ButtonAddTransaction/>
      <ModalAddTransaction/>
    </div>
  )
}

export default HomeTab
