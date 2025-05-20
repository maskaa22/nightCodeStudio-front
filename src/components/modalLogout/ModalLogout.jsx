import React, { useEffect } from 'react'
import s from './ModalLogout.module.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
const ModalLogout = ({onClose, isLogoutModalOpen}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
  
    document.addEventListener('keydown', handleEsc);
    
    return () => document.removeEventListener('keydown', handleEsc);
    
  }, [onClose]);
  
  if (!isLogoutModalOpen) return null;
  
  const handleLogout = async () => {
                try {
                  await dispatch(logOut()).unwrap();
                  navigate('/login', { replace: true });
                } catch (er) {
                  toast.error(er.message)
                }
  }
  
      return (
        <div className={s.backdrop} onClick={onClose}>
          <div className={s.modal} onClick={e => e.stopPropagation()}>
              <div className={s.logoWrapper}>
                <svg className={s.logoSvg}><use href="/sprite.svg#icon-logo" /></svg>
                <p className={s.logoText}>Spendy</p>
                </div>
              <p className={s.logoutConfirmParagraph}>Are you sure you want to log out?</p>
              <div className={s.btnsWrapper}>
              <button className={s.logoutBtn} onClick={handleLogout}>Logout</button>
                  <button className={s.cancelBtn} onClick={onClose}>Cancel</button>
              </div>
            </div>
    </div>
      )
}

export default ModalLogout
