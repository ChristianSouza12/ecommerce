import { FunctionComponent } from "react";
import Category from "../../types/categories.types";
import { CategoryItemContainer, CategoryName } from "./category-item.style";
import { useNavigate } from "react-router-dom";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  // Verifique se a URL da imagem já está completa, se não, ajuste a base da URL
  const imageUrl = category.imageUrl.startsWith("http")
    ? category.imageUrl
    : `http://localhost:8000${category.imageUrl}`; // Ajuste a URL conforme necessário

    const navigate = useNavigate()

    const handleExplorerClick =() => {

      navigate(`/category/${category.id}`)

    }

  return (
    <CategoryItemContainer
      style={{ backgroundImage: `url(${imageUrl})` }} // Aplicando a imagem de fundo
    >
      <CategoryName onClick={handleExplorerClick}>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
