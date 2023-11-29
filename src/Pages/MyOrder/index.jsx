import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"

export const MyOrder = () => {

    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
            <h1 className="title">My Order</h1>
            <div className="order_card_container_my_order">
                {
                    context.order?.slice(-1)[0].products.map(product => (
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