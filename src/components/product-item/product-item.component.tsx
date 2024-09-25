import { FunctionComponent, useContext } from "react";
import Product from "../../types/products.type";
import { BsCartPlus } from "react-icons/bs";
import { ProductContainer, ProductImage, ProductInfo } from "./product-item.styles";
import CustomButton from "../custom-buttom/custom-buttom.component";
import { CartContext } from "../../contexts/cart.context";

interface ProductItemProps {
  product: Product;
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const {addProductToCart} = useContext(CartContext)


  const handleAddToCartClick = () => {
    addProductToCart(product)
  }



  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton onClick={handleAddToCartClick} startIcon={<BsCartPlus size={20} />}>Adicionar ao carrinho</CustomButton>
      </ProductImage>
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductItem;
