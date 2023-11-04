// import CSS
import './style.scss';

export const Card = (data) => {

    return (
        <div className='card'>
            <figure className='card_figure'>
                <div className='card_figure_add'>+</div>
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