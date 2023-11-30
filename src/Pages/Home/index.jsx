// Import dependecias de React
import { useContext, useState } from "react"
import { useEffect } from "react"

// Import Component
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"

// Import CSS
import './style.scss';
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

export const Home = () => {

    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    <Card key={item.id} data={item} />
                ))
            )
        } else {
            return (
                <div>We don't have anything :(</div>
            )
        }
    }

    return (
        <div>
            <Layout>
                <div className="home">
                    <h1 className="title">Exclusive Products</h1>
                    <input className="input" type="text" placeholder="Search a Product" onChange={(event) => context.setSearchByTitle(event.target.value)} />
                </div>
                <div className="card_grid">
                    {renderView()}
                </div>
            </Layout>
            <ProductDetail />
        </div>
    )
}