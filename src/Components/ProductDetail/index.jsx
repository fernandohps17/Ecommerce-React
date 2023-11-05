// Import Iconos heroicos
import { XMarkIcon } from '@heroicons/react/24/solid'

// import CSS
import './style.scss'

export const ProductDetail = () => {

    return (
        <aside className='product_detail'>
            <div className='product_detail_title'>
                <h1>Product Detail</h1>
                <p className='product_detail_close'><XMarkIcon /></p>
            </div>

        </aside>
    )

}