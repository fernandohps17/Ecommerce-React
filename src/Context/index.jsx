import { useEffect } from "react";
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

    // Get Products
    const [items, setItems] = useState(null)

    // Filtrado por titulos
    const [filteredItems, setFilteredItems] = useState(null)

    // Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null)

    // Get Products by Categori
    const [searchByCategory, setSearchByCategory] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

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
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory,

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}