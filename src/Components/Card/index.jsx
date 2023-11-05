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

    return (
        <div className='card'>
            <figure className='card_figure'>
                <div className='card_figure_add' onClick={() => context.setCount(context.count + 1)}><PlusSmallIcon /></div>
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