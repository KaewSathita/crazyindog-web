import { createContext, useContext, useEffect, useState } from 'react';
import * as categoryService from '../api/categoryApi';

const CategoryContext = createContext();

function CategoryContextProvider({ children }) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        await getCategories()
      } catch (err) {
        console.log(err);
      } finally {
      }
    };
    fetchCategories();
  }, []);

  const getCategories = async () => {
    const res = await categoryService.getAll();
    setCategories(res.data.categories)
  }

  return (
    <CategoryContext.Provider value={{ categories, getCategories }}>
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategory = () => {
  return useContext(CategoryContext);
};

export default CategoryContextProvider;