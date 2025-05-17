import TransactionsList from '../transactionsList/TransactionsList'
import ButtonAddTransaction from '../buttonAddTransaction/ButtonAddTransaction'
import ModalAddTransaction from '../modalAddTransaction/ModalAddTransaction'
import { useState } from 'react';
import ModalDeleteTransaction from '../modalDeleteTransaction/ModalDeleteTransaction';

const HomeTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div>
      <TransactionsList/>
      <ButtonAddTransaction onClick={() => setIsOpen(true)}/>
      <ModalAddTransaction isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <ModalDeleteTransaction isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  )
}

export default HomeTab
