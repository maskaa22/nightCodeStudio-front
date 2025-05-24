import { registerThunk, logIn } from '../redux/auth/operations';
import { setUserData } from '../redux/user/slice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

export const useRegisterSubmit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (values, { resetForm }) => {
      const { confirmPassword, ...dataToSend } = values;

      try {
        const registerResult = await dispatch(
          registerThunk(dataToSend),
        ).unwrap();
        toast.success('Successfully registered!');

        if (registerResult?.data) {
          dispatch(setUserData(registerResult.data));
        }

        const loginData = {
          email: dataToSend.email,
          password: dataToSend.password,
        };
        await dispatch(logIn(loginData)).unwrap();
        toast.success('Logged in automatically!');

        navigate('/', { replace: true });

        resetForm();
      } catch (error) {
        const status = error?.status || error?.response?.status;

        if (status === 409) {
          toast.error('Email already exists. Please use a different one.');
        } else {
          toast.error('Registration or login failed. Please try again.');
        }
      }
    },
    [dispatch, navigate],
  );

  return handleSubmit;
};
