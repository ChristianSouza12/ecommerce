import { FunctionComponent } from "react";

import Category from "../../types/categories.types";
import { CategoryItemContainer, CategoryName } from "./category-item.style";

interface CategoryItemProps {
    category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
    const imageUrl = `http://localhost:8000${category.imageUrl}`;
   

    return (
        <CategoryItemContainer style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <CategoryName >
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </CategoryName>
        </CategoryItemContainer>
    );
};

export default CategoryItem;
