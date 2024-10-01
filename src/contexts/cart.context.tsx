import { createContext, FunctionComponent, useState, ReactNode, useMemo, useEffect } from "react";
import CartProduct from "../types/cart.types";
import Product from "../types/products.type";

interface ICartContext {
    isVisible: boolean;
    toggleCart: () => void;
    products: CartProduct[];
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (productId: string) => void;
    increaseProductQuantity: (productId: string) => void;
    decreaseProductQuantity: (productId: string) => void;
    productsTotalPrice: number;
    productsCount: number;
    clearProducts : () => void
}

interface CartContextProviderProps {
    children: ReactNode;  
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => {},
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    increaseProductQuantity: () => {},
    decreaseProductQuantity: () => {},
    productsTotalPrice: 0,
    productsCount: 0,
    clearProducts: () => {}
});

const CartContextProvider: FunctionComponent<CartContextProviderProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [products, setProducts] = useState<CartProduct[]>([]);

    // Load products from localStorage on mount
    useEffect(() => {
        const productsFromLocalStorage = localStorage.getItem("cartProducts");
        if (productsFromLocalStorage) {
            setProducts(JSON.parse(productsFromLocalStorage));
        }
    }, []);

    // Save products to localStorage on every change
    useEffect(() => {
        if (products.length > 0) {
            localStorage.setItem("cartProducts", JSON.stringify(products));
        } else {
            localStorage.removeItem("cartProducts");
        }
    }, [products]);

    const productsTotalPrice = useMemo(() => {
        return products.reduce((acc, currentProduct) => {
            return acc + currentProduct.price * currentProduct.quantity;
        }, 0);
    }, [products]);

    const productsCount = useMemo(() => {
        return products.reduce((acc, currentProduct) => {
            return acc + currentProduct.quantity;
        }, 0);
    }, [products]);

    const toggleCart = () => {
        setIsVisible((prevState) => !prevState);
    };

    const addProductToCart = (product: Product) => {
        const productIsAlreadyInCart = products.some((item) => item.id === product.id);

        if (productIsAlreadyInCart) {
            setProducts((prevProducts) =>
                prevProducts.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setProducts((prevState) => [...prevState, { ...product, quantity: 1 }]);
        }
    };

    const removeProductFromCart = (productId: string) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    };

    const increaseProductQuantity = (productId: string) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
            )
        );
    };

    const decreaseProductQuantity = (productId: string) => {
        setProducts((prevProducts) =>
            prevProducts
                .map((product) =>
                    product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
                )
                .filter((product) => product.quantity > 0)
        );
    };

    const clearProducts = () => {
        setProducts([])
    }

    return (
        <CartContext.Provider
            value={{
                isVisible,
                products,
                toggleCart,
                productsCount,
                addProductToCart,
                removeProductFromCart,
                increaseProductQuantity,
                decreaseProductQuantity,
                productsTotalPrice,
                clearProducts
                
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
