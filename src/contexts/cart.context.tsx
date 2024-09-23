import { createContext, FunctionComponent, useState, ReactNode } from "react";
import CartProduct from "../types/cart.types";

interface ICartContext {
    isVisible: boolean;
    toggleCart: () => void;
    products: CartProduct[];
}

interface CartContextProviderProps {
    children: ReactNode; // Especifica que o componente espera receber children
}

const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => {}
});

const CartContextProvider: FunctionComponent<CartContextProviderProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [products] = useState<CartProduct[]>([]);

    const toggleCart = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <CartContext.Provider value={{ isVisible, products, toggleCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
