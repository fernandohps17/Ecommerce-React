// Import React
import { useContext } from 'react'

// Import Context
import { ShoppingCartContext } from '../../Context'

// Import Iconos heroicos
import { XMarkIcon } from '@heroicons/react/24/solid'

// import CSS
import './style.scss'

export const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isChekoutSideMenuOpen ? 'flex' : ''} checkout_side_menu`}>

            <div className='checkout_side_menu_title'>
                <h1>My Order</h1>
                <p className='checkout_side_menu_close' onClick={() => context.closeChekoutSideMenu()}><XMarkIcon /></p>
            </div>

        </aside>
    )

}