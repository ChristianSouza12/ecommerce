import { FunctionComponent } from "react";
import Category from "../../types/categories.types";
import { CategoryItemContainer, CategoryName } from "./category-item.style";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  // Verifique se a URL da imagem já está completa, se não, ajuste a base da URL
  const imageUrl = category.imageUrl.startsWith("http")
    ? category.imageUrl
    : `http://localhost:8000${category.imageUrl}`; // Ajuste a URL conforme necessário

  return (
    <CategoryItemContainer
      style={{ backgroundImage: `url(${imageUrl})` }} // Aplicando a imagem de fundo
    >
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
