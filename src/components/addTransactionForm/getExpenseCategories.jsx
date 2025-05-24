import { useSelector } from 'react-redux';
import { selectCategories } from '../../redux/categories/selectors';

export const useExpenseCategories = () => {
  const categories = useSelector(selectCategories);

  const expenses =
    categories?.expense?.map((category) => ({
      value: category.title,
      label: category.title,
    })) || [];

  return expenses;
};
