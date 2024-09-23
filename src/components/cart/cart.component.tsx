import { FunctionComponent, useContext } from "react";

import { CartContainer, CartContent , CartEscapeArea , CartTitle, CartTotal ,} from "./cart.component.styles"
import CustomButton from "../custom-buttom/custom-buttom.component";

import {BsCartCheck} from "react-icons/bs"
import  { CartContext } from "../../contexts/cart.context";



const Cart : FunctionComponent = () => {

    const {isVisible,toggleCart} = useContext(CartContext)

        return (

            <CartContainer  isVisible={isVisible}   >
                <CartEscapeArea  onClick={toggleCart}    />
                <CartContent>
                    <CartTitle>Seu Carrinho.</CartTitle>


                    <CartTotal>Total : R$ 999</CartTotal>
                    <CustomButton  startIcon={<BsCartCheck     /> }   >Finalize sua Compra.</CustomButton>
                </CartContent>
            </CartContainer>

        )
}


export default Cart