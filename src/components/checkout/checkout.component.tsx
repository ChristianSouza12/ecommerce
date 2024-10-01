import { FunctionComponent, useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import {BsBagCheck } from "react-icons/bs"
import {FaShoppingCart } from "react-icons/fa"

import {CheckOutContainer,CheckOutProducts,CheckOutTitle,CheckOutTotal} from "./checkout.component.styles"
import CustomButton from "../custom-buttom/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";
import axios from "axios";
import Loading from "../loading/loading.component";

const Checkout : FunctionComponent = () => {

    const {products , productsTotalPrice} = useContext(CartContext)

    const [isLoading, setIsLoading] = useState(false)


    const handleFinishPurcharseClick = async () => {
        try{
            setIsLoading(true)
           const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/create-checkout-session`,{
            products
        }
    )

       window.location.href= data.url

        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false)
        }
    }

    return( 
        <>
       {isLoading && <Loading/>}
        <CheckOutContainer>
            
            <CheckOutTitle     >Finalize sua compra!</CheckOutTitle>

            {products.length > 0 ? (
                <>

<CheckOutProducts>

{products.map(product => (
    <CartItem product={product}    key={product.id}/>
) )}

</CheckOutProducts>

<CheckOutTotal>Total: R${productsTotalPrice}</CheckOutTotal>

<CustomButton onClick={handleFinishPurcharseClick}  startIcon={<BsBagCheck/>}   >Finalizar compra</CustomButton>
</>
                
            ) : (
                <>
                
                <p>Seu carrinho está vazio.</p> <FaShoppingCart size={30}/>
                </>
            )}
        </CheckOutContainer>
        </>
    )

}


export default Checkout