import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"
import { Link } from "react-router-dom"
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import './style.scss' 

export const MyOrder = () => {

    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1

    return (
        <Layout>
            <div className="orders">
                <Link to='/my-orders'>
                    <ArrowSmallLeftIcon className="orders_icon"/>
                </Link>
                <h1 className="title">My Order</h1>
            </div>
            <div className="order_card_container_my_order">
                {
                    context.order?.[index]?.products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )

}