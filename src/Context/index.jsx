import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    // Estado contador del carrito de compras
    const [count, setCount] = useState(0)

    // Estado para abrir y cerrar el productDetail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Estado para ver los productos en productDetail
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}