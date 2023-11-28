import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    // Estado contador del carrito de compras
    const [count, setCount] = useState(0)

    // Estado para abrir y cerrar el productDetail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Estado para abrir y cerrar el ChekoutSideMenu
    const [isChekoutSideMenuOpen, setIsChekoutSideMenuOpen] = useState(false)
    const openChekoutSideMenu = () => setIsChekoutSideMenuOpen(true)
    const closeChekoutSideMenu = () => setIsChekoutSideMenuOpen(false)

    // Estado para ver los productos en productDetail
    const [productToShow, setProductToShow] = useState({})

    // Estado para agregar los productos al carrito
    const [cartProducts, setCartProducts] = useState([])

    // Estado para la section de ordenes
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isChekoutSideMenuOpen,
            setIsChekoutSideMenuOpen,
            openChekoutSideMenu,
            closeChekoutSideMenu,
            order,
            setOrder,
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}