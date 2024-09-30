import { FunctionComponent, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {BsBagCheck } from "react-icons/bs"
import {FaShoppingCart } from "react-icons/fa"

import {CheckOutContainer,CheckOutProducts,CheckOutTitle,CheckOutTotal} from "./checkout.component.styles"
import CustomButton from "../custom-buttom/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";

const Checkout : FunctionComponent = () => {

    const {products , productsTotalPrice} = useContext(CartContext)

    return( 
        <CheckOutContainer>
            <CheckOutTitle>Finalize sua compra!</CheckOutTitle>

            {products.length > 0 ? (
                <>

<CheckOutProducts>

{products.map(product => (
    <CartItem product={product}    key={product.id}/>
) )}

</CheckOutProducts>

<CheckOutTotal>Total: R${productsTotalPrice}</CheckOutTotal>

<CustomButton  startIcon={<BsBagCheck/>}   >Finalizar compra</CustomButton>
</>
                
            ) : (
                <>
                
                <p>Seu carrinho está vazio.</p> <FaShoppingCart size={30}/>
                </>
            )}
        </CheckOutContainer>
    )

}


export default Checkout