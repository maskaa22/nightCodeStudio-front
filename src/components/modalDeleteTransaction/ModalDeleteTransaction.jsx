import React from 'react'
import s from './ModalDeleteTransaction.module.css'
const ModalDeleteTransaction = () => {
  const handleDelete = () => { };
  const handleCancel = () => { };
    return (
      <div className={s.backdrop}>
        <div className={s.modal}>
          <div className={s.closeWrapper}>
      <svg className={s.closeSvg}><use href="/sprite.svg#icon-close"/></svg>
          </div>
            <div className={s.logoWrapper}>
              <svg className={s.logoSvg}><use href="/sprite.svg#icon-timeline" /></svg>
              <p className={s.logoText}>Spendy</p>
              </div>
            <p className={s.deleteConfirmParagraph}>Are you sure you want to Delete?</p>
            <div className={s.btnsWrapper}>
                <button className={s.deleteBtn} onClick={handleDelete}>Delete</button>
                <button className={s.cancelBtn} onClick={handleCancel}>Cancel</button>
            </div>
          </div>
      </div>
  )
}

export default ModalDeleteTransaction