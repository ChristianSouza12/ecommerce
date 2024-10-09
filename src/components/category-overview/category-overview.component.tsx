import { FunctionComponent, useEffect } from "react";
import Category from "../../types/categories.types";

import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer,
} from "./category-overview.styles";
import ProductItem from "../product-item/product-item.component";

interface CategoryOverviewProps {
  category: Category;
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category,
}) => {
  // Verifica os valores de category e category.products
  useEffect(() => {
   
  }, [category]);

  const productsToDisplay = category.products?.slice(0, 4) || [];

  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer>
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product) => (
            <ProductItem key={product.id} product={product}/>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ProductsContainer>
    </CategoryContainer>
  );
};

export default CategoryOverview;
