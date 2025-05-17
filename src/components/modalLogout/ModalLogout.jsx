import React from 'react'
import s from './ModalLogout.module.css'
const ModalLogout = () => {
   const handleLogout = () => { };
    const handleCancel = () => { };
      return (
        <div className={s.backdrop}>
          <div className={s.modal}>
              <div className={s.logoWrapper}>
                <svg className={s.logoSvg}><use href="/sprite.svg#icon-timeline" /></svg>
                <p className={s.logoText}>Spendy</p>
                </div>
              <p className={s.logoutConfirmParagraph}>Are you sure you want to log out?</p>
              <div className={s.btnsWrapper}>
                  <button className={s.logoutBtn} onClick={handleLogout}>Logout</button>
                  <button className={s.cancelBtn} onClick={handleCancel}>Cancel</button>
              </div>
            </div>
    </div>
      )
}

export default ModalLogout