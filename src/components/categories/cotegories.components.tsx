import { useEffect, useState } from 'react';
import './categories.styles.css';
import Category from '../../types/categories.types';
import axios from 'axios';
import env from '../../config/env.config';
import CategoryItem from '../categories-item/category-item.component';

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
    <div className="categories-container">
      <div className="categories-content">
        {categories.map((category) => (
          <div key={category.id}>
          <CategoryItem  category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
