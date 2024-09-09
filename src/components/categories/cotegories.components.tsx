import { useEffect, useState } from 'react';

import {getDocs, collection} from "firebase/firestore"

import Category from '../../types/categories.types';


import CategoryItem from '../categories-item/category-item.component';
import { CategoriesContainer, CategoriesContent } from './categories.styles';
import { db } from '../../config/firebase.config';
import { categoryConverter } from '../../converters/firestore.converters';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore : Category []= []
      
      const querySnapshot = await getDocs(collection(db,"categories").withConverter(categoryConverter))

      querySnapshot.forEach((doc ) => {


        

        categoriesFromFirestore.push(doc.data())
        
      })


      setCategories(categoriesFromFirestore)
      console.log({categoriesFromFirestore})


      
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
