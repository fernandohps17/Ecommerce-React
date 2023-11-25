// Import React
import { useContext } from 'react'

// Import Component
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'

// Import Iconos heroicos
import { XMarkIcon } from '@heroicons/react/24/solid'

// import CSS
import './style.scss'

export const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)
    console.log(context.cartProducts)

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
                        />
                    ))
                }
            </div>
        </aside>
    )

}