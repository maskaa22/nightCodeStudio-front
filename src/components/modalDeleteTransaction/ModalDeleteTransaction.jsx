import React, { useEffect } from 'react'
import s from './ModalDeleteTransaction.module.css'
const ModalDeleteTransaction = ({isOpen, onClose}) => {
  const handleDelete = () => { };
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  if (!isOpen) return null;
    return (
      <div className={s.backdrop} onClick={onClose}>
        <div className={s.modal}>
          <button className={s.closeIconBtn} onClick={onClose}>
      <svg className={s.closeSvg}><use href="/sprite.svg#icon-close"/></svg>
          </button>
            <div className={s.logoWrapper}>
              <svg className={s.logoSvg}><use href="/sprite.svg#icon-logo" /></svg>
              <p className={s.logoText}>Spendy</p>
              </div>
            <p className={s.deleteConfirmParagraph}>Are you sure you want to Delete?</p>
            <div className={s.btnsWrapper}>
                <button className={s.deleteBtn} onClick={handleDelete}>Delete</button>
                <button className={s.cancelBtn} onClick={onClose}>Cancel</button>
            </div>
          </div>
      </div>
  )
}

export default ModalDeleteTransaction