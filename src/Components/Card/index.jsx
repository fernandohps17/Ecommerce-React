// import CSS
import './style.scss';

export const Card = () => {

    return (
        <div className='card'>
            <figure className='card_figure'>
                <div className='card_figure_add'>+</div>
                <img src="https://cdn11.bigcommerce.com/s-k11cg5mzh9/products/437/images/137086/fc0078efc5dd4e2b579dd153ea420bc4865818c9cfeab31652d4e20abdd9a3ee__73308.1698681473.500.750.png?c=2" alt="" />
                <span className='card_figure_category'>Electronics</span>
            </figure>
            <p className='card_content'>
                <span className='card_content_title'>Headphones</span>
                <span className='card_content_price'>300$</span>
            </p>
        </div>
    )
}