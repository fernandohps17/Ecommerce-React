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

    return (
        <div>
            <Layout>
                <div className="home">
                    <h1 className="title">Exclusive Products</h1>
                    <input className="input" type="text" placeholder="Search a Product" onChange={(event) => context.setSearchByTitle(event.target.value)}/>
                </div>
                <div className="card_grid">
                    {
                        context.items?.map(item => (
                            <Card data={item} key={item.id} />
                        ))
                    }
                </div>
            </Layout>
            <ProductDetail />
        </div>
    )
}

// clase 27