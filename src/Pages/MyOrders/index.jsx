import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"
import './style.scss'

export const MyOrders = () => {

    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div>
                <h1 className="title">My Orders</h1>
            </div>
            {
                context.order.map((index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrderCard 
                            totalPrice={order.totalPrice} 
                            totalProducts={order.totalProducts} />
                    </Link>
                ))
            }
        </Layout>
    )
}