// Import React
import { useContext } from 'react'

// Import Component
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'

// Import Iconos heroicos
import { XMarkIcon } from '@heroicons/react/24/solid'

// import CSS
import './style.scss'

export const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)
    
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    return (
        <aside className={`${context.isChekoutSideMenuOpen ? 'flex' : ''} checkout_side_menu`}>

            <div className='checkout_side_menu_title'>
                <h1>My Order</h1>
                <p className='checkout_side_menu_close' onClick={() => context.closeChekoutSideMenu()}><XMarkIcon /></p>
            </div>

            <div className="order_card_container">
                {
                    context.cartProducts.map((product) => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>

            <div className='checkout_side_menu_total_price'>
                <p className='checkout_side_menu_total_price_content'>
                    <span><b>Total Products:</b></span>
                    <span>{totalPrice(context.cartProducts)}$</span>
                </p>
            </div>

        </aside>
    )

}