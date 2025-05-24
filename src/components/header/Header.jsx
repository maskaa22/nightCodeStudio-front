import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Header.module.css';
import { selectUserName } from '../../redux/user/selectors';
import { selectUserPhoto } from '../../redux/user/selectors';
import { getUserData } from '../../redux/user/operations';
import UserProfileModal from '../userProfileModal/UserProfileModal';

const Header = ({ openLogoutModal }) => {
  const name = useSelector(selectUserName);
  const photo = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const [profileName, setProfileName] = useState(name);

  useEffect(() => {
    setProfileName(name);
  }, [name]);

  const handleSave = () => {
    setIsProfileOpen(false);
  };

  const firstLetter = name?.trim()?.charAt(0)?.toUpperCase() || '';

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.layout}>
          <img
            className={s.logo}
            src="/images/mob-logo-white-1x.png"
            srcSet="/images/mob-logo-white-1x.png 1x, /images/mob-logo-white-2x.png 2x"
            alt="Logo"
          />
          <div className={s.exitBlock}>
            <div
              className={s.headerAvatarWrapper}
              style={{ cursor: 'pointer' }}
              onClick={() => setIsProfileOpen(true)}
            >
              {photo ? (
                <img src={photo} alt="avatar" className={s.headerAvatar} />
              ) : (
                <div className={s.headerAvatarSkeleton}>{firstLetter}</div>
              )}
            </div>
            <button className={s.exitButton} onClick={openLogoutModal}>
              <svg className={s.exitIcon} width="18" height="18">
                <use href="/sprite.svg#icon-exit" />
              </svg>
              <p className={s.exitText}>Exit</p>
            </button>
          </div>
        </div>
      </div>
      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        name={profileName}
        onSave={handleSave}
      />
    </header>
  );
};

export default Header;
