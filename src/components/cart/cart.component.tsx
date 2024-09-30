import { FunctionComponent, useContext } from "react";

import { CartContainer, CartContent , CartEscapeArea , CartTitle, CartTotal  } from "./cart.component.styles"
import CustomButton from "../custom-buttom/custom-buttom.component";

import {BsCartCheck} from "react-icons/bs"
import  { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";



const Cart : FunctionComponent = () => {

    const {isVisible,toggleCart, products , productsTotalPrice , productsCount} = useContext(CartContext)


    const navigate = useNavigate()

    const handleToCheck = () => {
        navigate("/checkout")
        toggleCart()
    }

        return (

            <CartContainer  isVisible={isVisible}   >
                <CartEscapeArea  onClick={toggleCart}    />
                <CartContent>
                    <CartTitle>Seu Carrinho.</CartTitle>

                    {products.map(product => <CartItem  key={product.id}  product={product}   />)}

                    {productsCount > 0 && (
                        <CartTotal>Total : R${productsTotalPrice}</CartTotal>
                    )}

                    
                    {productsCount > 0 && (
                        <CustomButton  onClick={handleToCheck}   startIcon={<BsCartCheck     /> }   >Finalize sua Compra.</CustomButton>
                    )}

                    {productsCount === 0 && (
                        <p>Carrinho vazio, adicione algum produto.</p>

                    )}
                </CartContent>
            </CartContainer>

        )
}


export default Cart