// import CSS
import './style.scss';

export const Card = () => {

    return (
        <div className='card'>
            <figure className='card_figure'>
                <div className='card_figure_add'>+</div>
                <img src="https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg" alt="" />
                <span className='card_figure_category'>Electronics</span>
            </figure>
            <p className='card_content'>
                <span className='card_content_title'>Headphones</span>
                <span className='card_content_price'><b>300$</b></span>
            </p>
        </div>
    )
}