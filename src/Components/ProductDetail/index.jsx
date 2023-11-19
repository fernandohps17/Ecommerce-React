// Import React
import { useContext } from 'react'

// Import Context
import { ShoppingCartContext } from '../../Context'

// Import Iconos heroicos
import { XMarkIcon } from '@heroicons/react/24/solid'

// import CSS
import './style.scss'

export const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : ''} product_detail`}>

            <div className='product_detail_title'>
                <h1>Product Detail</h1>
                <p className='product_detail_close' onClick={() => context.closeProductDetail()}><XMarkIcon /></p>
            </div>

            <figure className='product_detail_img'>
                <img src={context.productToShow.images && context.productToShow.images[0]} alt={context.productToShow.title} />
            </figure>

            <p className='product_detail_content'>
                <span><b>Precio:</b> {context.productToShow.price}$</span>
                <span><b>Titulo:</b> {context.productToShow.title}</span>
                <span><b>Descripcion:</b> {context.productToShow.description}</span>
            </p>
        </aside>
    )

}