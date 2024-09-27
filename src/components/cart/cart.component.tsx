import { FunctionComponent, useContext } from "react";

import { CartContainer, CartContent , CartEscapeArea , CartTitle, CartTotal ,} from "./cart.component.styles"
import CustomButton from "../custom-buttom/custom-buttom.component";

import {BsCartCheck} from "react-icons/bs"
import  { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";



const Cart : FunctionComponent = () => {

    const {isVisible,toggleCart, products , productsTotalPrice} = useContext(CartContext)

        return (

            <CartContainer  isVisible={isVisible}   >
                <CartEscapeArea  onClick={toggleCart}    />
                <CartContent>
                    <CartTitle>Seu Carrinho.</CartTitle>

                    {products.map(product => <CartItem  key={product.id}  product={product}   />)}

                    <CartTotal>Total : R${productsTotalPrice}</CartTotal>
                    <CustomButton  startIcon={<BsCartCheck     /> }   >Finalize sua Compra.</CustomButton>
                </CartContent>
            </CartContainer>

        )
}


export default Cart