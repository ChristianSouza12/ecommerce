import { createContext, FunctionComponent, useState, ReactNode } from "react";
import CartProduct from "../types/cart.types";
import Product from "../types/products.type";

interface ICartContext {
    isVisible: boolean;
    toggleCart: () => void;
    products: CartProduct[];
    addProductToCart: (product: Product) => void
}

interface CartContextProviderProps {
    children: ReactNode; // Especifica que o componente espera receber children
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => {},
    addProductToCart: () => {}
});




const CartContextProvider: FunctionComponent<CartContextProviderProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [products, setProducts] = useState<CartProduct[]>([]);

    const toggleCart = () => {
        setIsVisible(prevState => !prevState);
    };

    const addProductToCart = ( product: Product) => {

            const productIsAlreadyInCart = products.some((item) => item.id === product.id)


            if(productIsAlreadyInCart){
                


                return setProducts(products => products.map(item => item.id === product.id ? {...item,quantity: item.quantity+1 }
                     : item 
               ) 
            )
        }


        setProducts((prevState) => [...prevState, {...product,quantity:1}])

    }

    return (
        <CartContext.Provider value={{ isVisible, products, toggleCart , addProductToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
