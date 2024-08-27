import { FunctionComponent } from "react";
import "./category-item.styles.css";
import Category from "../../types/categories.types";

interface CategoryItemProps {
    category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
    const imageUrl = `http://localhost:8000${category.imageUrl}`;
   

    return (
        <div
            className="category-item-container"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="category-name">
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </div>
        </div>
    );
};

export default CategoryItem;
