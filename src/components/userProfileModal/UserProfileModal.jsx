import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './UserProfileModal.module.css';
import axios from 'axios';
import { setUserPhoto } from '../../redux/user/slice';
import { selectUserPhoto } from '../../redux/user/selectors';

const NAME_REGEX = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'\-\s]+$/;
const API_URL = import.meta.env.VITE_API_URL;

const UserProfileModal = ({ isOpen, onClose, name, onSave }) => {
  const dispatch = useDispatch();
  const reduxPhoto = useSelector(selectUserPhoto);
  const [localName, setLocalName] = useState(name || '');
  const [localAvatar, setLocalAvatar] = useState(reduxPhoto || '');
  const [avatarFile, setAvatarFile] = useState(null);
  const [nameError, setNameError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const token = localStorage.getItem('persist:auth')
    ? JSON.parse(
        JSON.parse(localStorage.getItem('persist:auth')).accessToken || 'null',
      )
    : null;

  useEffect(() => {
    setLocalName(name || '');
  }, [name]);
  useEffect(() => {
    setLocalAvatar(reduxPhoto || '');
  }, [reduxPhoto]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  const validateName = (value) => {
    if (!value.trim()) return 'Name is required';
    if (!NAME_REGEX.test(value.trim()))
      return 'Error: You can add only letters';
    return '';
  };

  const handleNameChange = (e) => {
    setLocalName(e.target.value);
    setNameError('');
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = (ev) => setLocalAvatar(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    let valid = true;
    const nameErr = validateName(localName);
    setNameError(nameErr);
    if (nameErr) valid = false;

    if (!valid) return;
    setIsSubmitting(true);
    try {
      if (localName !== name) {
        const res = await axios.patch(
          `${API_URL}/users/me`,
          { name: localName },
          { headers: { Authorization: `Bearer ${token}` } },
        );
        if (res.data?.data?.photo) {
          dispatch(setUserPhoto(res.data.data.photo));
        }
      }
      if (avatarFile) {
        const formData = new FormData();
        formData.append('photo', avatarFile);
        const res = await axios.patch(`${API_URL}/users/photo`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data?.data?.photo) {
          dispatch(setUserPhoto(res.data.data.photo));
        }
      }
      onSave && onSave();
      onClose();
    } catch {
      setNameError('Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const firstLetter = name?.trim()?.charAt(0)?.toUpperCase() || '';
  const skeletonLetter =
    avatarFile || localAvatar
      ? localName?.trim()?.charAt(0)?.toUpperCase() || ''
      : firstLetter;

  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <button className={s.closeBtn} onClick={onClose} aria-label="Close">
          <svg className={s.closeSvg} width="16" height="16">
            <use href="/sprite.svg#icon-close" />
          </svg>
        </button>
        <div className={s.avatarBlock}>
          {localAvatar ? (
            <img src={localAvatar} alt="avatar" className={s.avatar} />
          ) : (
            <div className={s.avatarSkeleton}>{skeletonLetter}</div>
          )}
          <label className={s.avatarAddBtn}>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleAvatarChange}
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="8"
                y1="3"
                x2="8"
                y2="13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="3"
                y1="8"
                x2="13"
                y2="8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </label>
        </div>
        <div className={s.inputWrapper}>
          <input
            className={`${s.input}${nameError ? ' ' + s.inputError : ''}`}
            type="text"
            placeholder="Name"
            value={localName}
            onChange={handleNameChange}
            disabled={isSubmitting}
          />
          {nameError && <div className={s.error}>{nameError}</div>}
        </div>
        <button
          className={s.saveBtn}
          onClick={handleSave}
          disabled={isSubmitting}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UserProfileModal;
