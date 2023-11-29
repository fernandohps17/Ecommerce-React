import './style.scss';

export const OrdersCard = props => {

    const { totalPrice, totalProducts } = props

    return (
        <div className="orders_card">
            <p>
                <span>01.02.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}