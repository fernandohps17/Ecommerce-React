import { XMarkIcon } from "@heroicons/react/24/solid"
import './style.scss';

export const OrderCard = props => {

    const { id, title, imageUrl, price } = props

    return (
        <div>
            <div className="order_card">
                <div className="order_card_top">
                    <figure className="order_card_top_img">
                        <img src={imageUrl} alt={title} />
                    </figure>

                    <p className="order_card_top_title"><b>Titulo:</b> {title}</p>
                </div>

                <div className="order_card_botton">
                    <p><b>Precio:</b> {price}$</p>
                    <XMarkIcon className="order_card_bottom_icon"></XMarkIcon>
                </div>
            </div>
        </div>
    )
}