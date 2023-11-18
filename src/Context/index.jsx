import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    // Estado contador del carrito de compras
    const [count, setCount] = useState(0)

    // Estado para abrir y cerrar el productDetail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}