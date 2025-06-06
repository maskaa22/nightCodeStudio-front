import s from './ModalLogout.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { useKeyDownFunction } from '../../utils/keyDown';

const ModalLogout = ({ onClose, isLogoutModalOpen }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useKeyDownFunction(onClose);

  if (!isLogoutModalOpen) return null;

  return (
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.modal} onClick={(e)=> e.stopPropagation()}>
        <div className={s.logoWrapper}>
          <svg className={s.logoSvg}>
            <use href="/sprite.svg#icon-logo" />
          </svg>
          <p className={s.logoText}>Spendy</p>
        </div>
        <p className={s.logoutConfirmParagraph}>
          Are you sure you want to log out?
        </p>
        <div className={s.btnsWrapper}>
          <button className={s.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
          <button className={s.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
