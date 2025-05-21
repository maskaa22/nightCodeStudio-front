import { logIn } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

export const loginHandlerSubmit =
  (dispatch, navigate) => async (values, actions) => {
    try {
      const result = await dispatch(logIn(values));
      if (logIn.fulfilled.match(result)) {
        toast.success('Login successful!');
        actions.resetForm();
        navigate('/dashboard');
      } else {
        toast.error('Login failed. Check your credentials.');
      }
    } catch {
      toast.error('Something went wrong.');
    } finally {
      actions.setSubmitting(false);
    }
  };
