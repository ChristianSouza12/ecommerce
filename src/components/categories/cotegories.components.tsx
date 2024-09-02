import { useEffect, useState } from 'react';

import Category from '../../types/categories.types';
import axios from 'axios';
import env from '../../config/env.config';
import CategoryItem from '../categories-item/category-item.component';
import { CategoriesContainer, CategoriesContent } from './categories.styles';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/categories`);
      setCategories(data);
    } catch (error) {
      console.log('Erro ao buscar categorias:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
          <CategoryItem  category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Categories;
