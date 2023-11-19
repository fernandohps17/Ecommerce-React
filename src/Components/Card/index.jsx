// Import Iconos heroicos
import { PlusSmallIcon } from '@heroicons/react/24/solid'

// Import CSS
import './style.scss';

// Import dependencias de react
import { useContext } from 'react';

// Import estado global
import { ShoppingCartContext } from '../../Context';

export const Card = (data) => {

    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    // funcion para agregar el product al dar click en el icono plus
    const addProductsToCart = (productData) => {
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        console.log( 'cart:', context.cartProducts)
    }

    return (
        <div className='card' onClick={() => showProduct(data.data)}>
            <figure className='card_figure'>
                <div className='card_figure_add' onClick={() => addProductsToCart(data.data)}><PlusSmallIcon /></div>
                <img src={data.data.images[0]} alt={data.data.title} />
                <span className='card_figure_category'>{data.data.category.name}</span>
            </figure>
            <p className='card_content'>
                <span className='card_content_title'>{data.data.title}</span>
                <span className='card_content_price'><b>{data.data.price}$</b></span>
            </p>
        </div>
    )
}